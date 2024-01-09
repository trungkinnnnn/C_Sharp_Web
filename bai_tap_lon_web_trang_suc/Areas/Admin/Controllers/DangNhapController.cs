using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class DangNhapController : User_SessionController
    {
        // GET: Admin/DangNhap
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult DangNhap()
        {
            ViewBag.ErrorMessage = TempData["ErrorMessage"] as string;
            ViewBag.taikhoan = TempData["taikhoan"] as string;
            ViewBag.matkhau = TempData["matkhau"] as string;
            return View();
        }
        [HttpPost]
        public ActionResult DangNhap(string taikhoan , string matkhau)
        {
            if(db.Admins.FirstOrDefault(m => m.TaiKhoan == taikhoan && m.MatKhau == matkhau) != null)
            {
                Set_User_Admin(taikhoan);
                
                return RedirectToAction("Index", "Home");
            }
            else
            {
                TempData["ErrorMessage"] = "Tài khoản hoặc mật khẩu không đúng.";
                TempData["taikhoan"] = taikhoan;
                TempData["matkhau"] = matkhau;
                return RedirectToAction("DangNhap");
            }
           
        }

        public ActionResult DangXuat()
        {
            Session.Clear(); // Xóa tất cả dữ liệu trong Session
            Session.Abandon(); // hủy phiên hiện tại


            return RedirectToAction("DangNhap");
        }
    }
}