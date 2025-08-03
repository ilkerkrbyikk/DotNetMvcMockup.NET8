using Microsoft.AspNetCore.Mvc;

namespace POCSolution.ViewComponents
{
    public class MegaMenuViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            // Şu anda statik veri dönüyoruz
            // İleride bu veriler database'den gelecek
            return View();
        }
    }
}
