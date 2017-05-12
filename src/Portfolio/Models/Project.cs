using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp;
using RestSharp.Authenticators;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Portfolio.Models
{
    public class Project
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Html_url { get; set; }
        public string Description { get; set; }
        public int Stargazers_count { get; set; }

        public static List<Project> GetProjects()
        {
            var client = new RestClient("https://api.github.com/");
            var request = new RestRequest("https://api.github.com/users/cassandramusolf/repos", Method.GET);

            var response = new RestResponse();
            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(response.Content);
            string jsonOutput = jsonResponse["repos"].ToString();
            //Console.WriteLine(jsonOutput);
            var projectList = JsonConvert.DeserializeObject<List<Project>>(jsonOutput);
            Console.WriteLine(projectList[0].Name);
            return projectList;
        }
        public static Task<IRestResponse> GetResponseContentAsync(RestClient theClient, RestRequest theRequest)
        {
            var tcs = new TaskCompletionSource<IRestResponse>();
            theClient.ExecuteAsync(theRequest, response =>
            {
                tcs.SetResult(response);
            });
            return tcs.Task;
        }
    }
}
