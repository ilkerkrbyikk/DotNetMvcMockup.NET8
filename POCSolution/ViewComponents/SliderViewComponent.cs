using Microsoft.AspNetCore.Mvc;

namespace POCSolution.ViewComponents
{
    public class SliderViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            var slides = GetSlides();
            return View(slides);
        }

        private List<SlideModel> GetSlides()
        {
            return new List<SlideModel>
            {
                new SlideModel
                {
                    Id = 1,
                    ImageUrl = "~/img/slider/slide-1.jpg",
                    Title = "Yenilikçi Teknoloji Çözümleri",
                    Description = "Modern yazılım geliştirme yaklaşımları ile işletmenizi geleceğe taşıyoruz. Dijital dönüşüm yolculuğunuzda yanınızdayız."
                },
                new SlideModel
                {
                    Id = 2,
                    ImageUrl = "~/img/slider/slide-2.jpg",
                    Title = "Profesyonel Danışmanlık Hizmetleri",
                    Description = "Uzman kadromuz ile stratejik IT danışmanlığı sunuyoruz. İş süreçlerinizi optimize ederek verimliliğinizi artırın."
                },
                new SlideModel
                {
                    Id = 3,
                    ImageUrl = "~/img/slider/slide-3.jpg",
                    Title = "Kapsamlı Proje Yönetimi",
                    Description = "Başlangıçtan teslimat aşamasına kadar projelerinizi titizlikle yönetiyoruz. Zamanında ve bütçe dostu çözümler."
                },
                new SlideModel
                {
                    Id = 4,
                    ImageUrl = "~/img/slider/slide-4.jpg",
                    Title = "7/24 Teknik Destek",
                    Description = "Sistemlerinizin kesintisiz çalışması için sürekli izleme ve anında müdahale hizmetimizden yararlanın."
                }
            };
        }
    }

    public class SlideModel
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}