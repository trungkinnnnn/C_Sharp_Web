using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class KhachHangController : Controller
    {
        // GET: Admin/KhachHang
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult DanhSach()
        {
            return View(db.KhachHangs.ToList());
        }
    }
}