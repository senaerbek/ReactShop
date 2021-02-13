using AutoMapper;
using Businness.Abstract;
using Businness.Concrete;
using Core.DataAccess.Concrete.JwtContext;
using Core.Utilities.Jwt;
using Core.Utilities.Jwt.Encription;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient();

            services.AddControllers();

            services.AddApiVersioning(o =>
            {
                o.ReportApiVersions = true;
                o.AssumeDefaultVersionWhenUnspecified = true;
                o.DefaultApiVersion = new ApiVersion(1, 0);
            });

            // AddScoped, AddTransient, AddSingleton ???
            services.AddScoped<IUserService, UserManager>();
            services.AddScoped<IUserDal, EfUserDal>();

            services.AddScoped<ICategoryService, CategoryManager>();
            services.AddScoped<ICategoryDal, EfCategoryDal>();


            services.AddScoped<IProductService, ProductManager>();
            services.AddScoped<IProductDal, EfProductDal>();

            services.AddScoped<ITrademarkDal, EfTrademarkDal>();
            services.AddScoped<ITrademarkService, TrademarkManager>();





            services.AddScoped<IAuthService, AuthManager>();


            services.AddScoped<IUserOperationClaimDal, EfUserOperationClaimDal>();
            services.AddScoped<IUserOperationClaimService, UserOperationClaimManager>();


            services.AddTransient<ITokenHelper, JwtHelper>();
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddDbContext<JwtContext>();


            services.AddMvc(option =>
            {
                option.EnableEndpointRouting = false;
            });



            services.AddEntityFrameworkSqlServer();
            services.AddAutoMapper(typeof(Startup));

            services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin", builder => builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            });


            services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );



            var tokenOptions = Configuration.GetSection("TokenOptions").Get<TokenOptions>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = false, //true
                    ValidateLifetime = true,
                    ValidIssuer = tokenOptions.Issuer,
                    ValidAudience = tokenOptions.Auidence,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = SecurityKeyHelper.CreateSKey(tokenOptions.SecurityKey)

                };
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin() /*get, post, put, delete, patch... izin ver*/);
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
