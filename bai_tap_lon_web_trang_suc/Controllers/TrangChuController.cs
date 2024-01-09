using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using bai_tap_lon_web_trang_suc.Controllers;
namespace bai_tap_lon_web_trang_suc.Controllers
{
    public class TrangChuController : SessionController
    {
        private web_trang_sucEntities db = new web_trang_sucEntities();

        public ActionResult TrangChu()
        {
            // Kiểm tra xem có Session "TaiKhoan" hay không
            if (Session["TaiKhoan"] != null)
            {
                // Người dùng đã đăng nhập
                string taiKhoan = Session["TaiKhoan"].ToString();

                // Thực hiện các hành động phù hợp cho người dùng đã đăng nhập
                // Ví dụ: lấy thông tin người dùng từ CSDL và truyền nó đến view
                var userInfo = db.TaiKhoans.FirstOrDefault(s => s.TaiKhoan1 == taiKhoan);

                // Truyền danh sách sản phẩm và thông tin người dùng đến view
                ViewBag.UserInfo = userInfo;
                ViewBag.soluonggiohang = demsanphamtronggiohang();

            }
            // Các hành động chung cho cả trường hợp người dùng đã đăng nhập và chưa đăng nhập
            return View(db.SanPhams.OrderByDescending(p => p.ID_SanPham).ToList());
        }
    }
}
