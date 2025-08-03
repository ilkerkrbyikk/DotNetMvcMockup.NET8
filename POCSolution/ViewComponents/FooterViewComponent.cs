using Microsoft.AspNetCore.Mvc;

namespace YourProjectName.ViewComponents
{
    public class FooterViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            // Şu anda statik veri dönüyoruz
            // İleride bu veriler database'den gelecek
            return View();
        }
    }
}