using System.Web;
using System.Web.Mvc;

namespace bai_tap_lon_web_trang_suc
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
