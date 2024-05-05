// run node postinstall.js to update to latest version
using System.Globalization;
using ServiceStack.IO;
using ServiceStack.Logging;

namespace Ssg;

public class MarkdownProducts : MarkdownPagesBase<MarkdownFileInfo>
{
    public override string Id => "products";
    public MarkdownProducts(ILogger<MarkdownWhatsNew> log, IWebHostEnvironment env) : base(log, env) { }
    List<MarkdownFileInfo> Pages { get; set; } = new();
    public List<MarkdownFileInfo> VisiblePages => Pages.Where(IsVisible).ToList();

    //public MarkdownFileInfo? GetBySlug(string slug) =>
    //    Fresh(VisiblePages.FirstOrDefault(x => x.Slug == slug));

    public void LoadFrom(string fromDirectory)
    {
        Pages.Clear();
        var fs = AssertVirtualFiles();
        var files = fs.GetDirectory(fromDirectory).GetAllFiles().ToList();
        var log = LogManager.GetLogger(GetType());
        log.InfoFormat("Found {0} pages", files.Count);

        var pipeline = CreatePipeline();

        foreach (var file in files)
        {
            var doc = Load(file.VirtualPath, pipeline);
            //capitalize name
            doc.Title = char.ToUpper(doc.Title[0]) + doc.Title.Substring(1);
            if (doc == null)
                continue;

            Pages.Add(doc);
        }
    }

}
