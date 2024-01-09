using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using bai_tap_lon_web_trang_suc.Controllers;
namespace bai_tap_lon_web_trang_suc.Controllers
{
    public class DangNhapController : SessionController
    {
        private web_trang_sucEntities db = new web_trang_sucEntities();
        public static string GetMD5(string str)
        {
            using (MD5 md5 = new MD5CryptoServiceProvider())
            {
                byte[] fromData = Encoding.UTF8.GetBytes(str);
                byte[] targetData = md5.ComputeHash(fromData);

                StringBuilder result = new StringBuilder();

                for (int i = 0; i < targetData.Length; i++)
                {
                    result.Append(targetData[i].ToString("x2"));
                }

                return result.ToString();
            }
        }


        // GET: Login
        public ActionResult DangNhap()
        {
            return View();
        }

        [HttpPost]
        public ActionResult DangNhap(TaiKhoan model, string action)
        {
            if (ModelState.IsValid)
            {
                if (action == "login")
                {
                    var f_password = GetMD5(model.MatKhau);
                    var data = db.TaiKhoans.FirstOrDefault(s => s.TaiKhoan1.Equals(model.TaiKhoan1) && s.MatKhau.Equals(f_password));

                    if (data != null)
                    {
                        var khachhang = db.KhachHangs.FirstOrDefault(m => m.TaiKhoan == data.TaiKhoan1);
                        Set_User(khachhang.ID_KhachHang);
                        SaveId();
                        return RedirectToAction("TrangChu", "TrangChu");
                    }

                    else
                    {
                        ViewBag.error = "Đăng nhập không thành công";
                        return View("DangNhap");
                    }
                }
                else if (action == "register")
                {
                    var check = db.TaiKhoans.FirstOrDefault(s => s.TaiKhoan1 == model.TaiKhoan1);
                    if (check == null)
                    {
                        // Thêm tài khoản mới
                        model.MatKhau = GetMD5(model.MatKhau);
                        db.TaiKhoans.Add(model);
                        db.SaveChanges();

                        
                        UpdateKhachHangInfo(model.TaiKhoan1);
                        var khachhang = db.KhachHangs.FirstOrDefault(m => m.TaiKhoan == model.TaiKhoan1);
                        Set_User(khachhang.ID_KhachHang);
                        return RedirectToAction("TrangChu", "TrangChu");
                    }
                    else
                    {
                        ViewBag.error = "Email đã tồn tại";
                        return View("DangNhap");
                    }
                }
            }
            return View("DangNhap");
        }

        private void UpdateKhachHangInfo(string taiKhoan)
        {
            var taiKhoanInfo = db.TaiKhoans.FirstOrDefault(tk => tk.TaiKhoan1 == taiKhoan);

            if (taiKhoanInfo != null)
            {
                // Kiểm tra xem tài khoản đã tồn tại trong bảng KhachHang chưa
                var khachHang = db.KhachHangs.FirstOrDefault(kh => kh.TaiKhoan == taiKhoan);

                if (khachHang == null)
                {
                    // Nếu chưa tồn tại, thêm mới vào bảng KhachHang
                    KhachHang newKhachHang = new KhachHang
                    {
                        TaiKhoan = taiKhoanInfo.TaiKhoan1
                    };

                    db.KhachHangs.Add(newKhachHang);
                    db.SaveChanges();
                }
            }
        }
    }
}
