using System.Text.Json;
using Common.API.Helpers;
using Common.Interfaces.Pagination;
using Microsoft.AspNetCore.Http;

namespace Common.API.Extensions;

public static class HttpExtensions
{
    public static void AddPaginationHeader(
        this HttpResponse responce,
        PaginationHeader header)
    {
        JsonSerializerOptions jsonOptions = new() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
        responce.Headers.Add("Pagination", JsonSerializer.Serialize(header, jsonOptions));
        responce.Headers.Add("Access-Control-Expose-Headers", "Pagination");
    }

    public static void AddPaginationHeader<T>(
        this HttpResponse responce,
        IPagedCollection<T> list)
    {
        responce.AddPaginationHeader(new PaginationHeader(list.PageNumber, list.PageSize,
            list.TotalCount, list.TotalPages));
    }
}
