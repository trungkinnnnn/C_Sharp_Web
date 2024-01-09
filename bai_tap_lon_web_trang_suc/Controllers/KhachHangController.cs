using System.Linq;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;

namespace bai_tap_lon_web_trang_suc.Controllers
{
    public class KhachHangController : SessionController
    {
        private web_trang_sucEntities db = new web_trang_sucEntities();

        // GET: KhachHang/Sua
        public ActionResult Sua()
        {
            // Lấy ID của khách hàng từ session
            int idKhachHang = Get_User();
            ViewBag.soluonggiohang = demsanphamtronggiohang();
            // Kiểm tra xem ID có hợp lệ không
            if (idKhachHang <= 0)
            {
                return HttpNotFound(); // Hoặc có thể chuyển hướng đến một trang lỗi khác
            }

            // Tìm thông tin của khách hàng
            KhachHang khachHang = db.KhachHangs.Find(idKhachHang);

            // Kiểm tra xem thông tin có tồn tại không
            if (khachHang == null)
            {
                return HttpNotFound(); // Hoặc chuyển hướng đến trang lỗi
            }

            // Chuyển đến view Sua và truyền thông tin của khách hàng
            return View(khachHang);
        }

        // POST: KhachHang/Sua
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Sua(KhachHang model)
        {
            // Kiểm tra tính hợp lệ của dữ liệu nhập vào
            if (ModelState.IsValid)
            {
                // Lấy thông tin khách hàng từ cơ sở dữ liệu
                KhachHang khachHang = db.KhachHangs.Find(model.ID_KhachHang);

                // Kiểm tra xem thông tin có tồn tại không
                if (khachHang == null)
                {
                    return HttpNotFound(); // Hoặc chuyển hướng đến trang lỗi
                }

                // Cập nhật thông tin của khách hàng
                khachHang.HoTen = model.HoTen;
                khachHang.Email = model.Email;
                khachHang.DiaChi = model.DiaChi;
                khachHang.SDT = model.SDT;

                // Lưu thay đổi vào cơ sở dữ liệu
                int ketQua = db.SaveChanges();

                if (ketQua > 0)
                {
                    return RedirectToAction("edit"); // Hoặc chuyển hướng đến trang khác
                }
            }

            // Nếu có lỗi, quay lại view Sua để hiển thị lỗi hoặc thông tin đã nhập
            return View(model);
        }
    }
}
