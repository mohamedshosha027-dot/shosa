using EliteHomes.Api.Configuration;
using EliteHomes.Api.Endpoints;
using EliteHomes.Api.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
var configuredPort = builder.Configuration.GetValue<int?>("App:Port") ?? 5000;

builder.WebHost.UseUrls($"http://0.0.0.0:{configuredPort}");

builder.Services
    .AddEliteHomesServices()
    .AddAppConfiguration(builder.Configuration);

var app = builder.Build();
var appSettings = app.Services.GetRequiredService<AppSettings>();
var routePrefix = appSettings.ApiPrefix.StartsWith('/')
    ? appSettings.ApiPrefix
    : $"/{appSettings.ApiPrefix}";

app.MapGroup(routePrefix)
    .MapHealthEndpoints();

app.Run();
