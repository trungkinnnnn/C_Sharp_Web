using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Controllers
{
    public class SessionController : Controller
    {
        web_trang_sucEntities db = new web_trang_sucEntities();
        protected void Set_User(int id)
        {
            Session["TaiKhoan"] = id;
        }

        protected int Get_User()
        {
            if (Session["TaiKhoan"] != null)
            {
                string taiKhoanStr = Session["TaiKhoan"].ToString();
                int taiKhoan;
                if (int.TryParse(taiKhoanStr, out taiKhoan))
                {
                    // Chuyển đổi thành công, bạn có thể sử dụng biến "taiKhoan" ở đây.
                    return taiKhoan;
                }
            }
            return 0; // 
        }

        public ActionResult SaveId()
        {
            int idKhachHang = Get_User();
            ViewBag.IdKhachHang = idKhachHang;

            return View();
        }

        public ActionResult Logout()
        {
            Session["TaiKhoan"] = null;

            return RedirectToAction("TrangChu", "TrangChu");
        }

        public int demsanphamtronggiohang()
        {
            int id_khachhang = Get_User();
            var id_giohang = db.GioHangs.FirstOrDefault(m => m.ID_KhachHang == id_khachhang);
            if(id_giohang != null)
            {
                var danhsachchitietgiohang = db.ChiTietGioHangs.Where(m => m.ID_GioHang == id_giohang.ID_GioHang).ToList();
                return danhsachchitietgiohang.Count;
            }    
           return 0;
        }

    }
}