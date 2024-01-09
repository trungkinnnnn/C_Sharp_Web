using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class PhieuNhapController : User_SessionController
    {
        // GET: Admin/PhieuNhap
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult DanhSach()
        {
            if (Get_User_Admin() == null)
            {
                return RedirectToAction("DangNhap", "DangNhap");
            }

            var danhsachphieunhap = db.PhieuNhaps.ToList();
            
            return View(danhsachphieunhap);
        }

        public ActionResult ChiTietPhieuNhap(int? id)
        {
            var phieunhap = db.PhieuNhaps.Find(id);
            return View(phieunhap);
        }

        public ActionResult Them_PN()
        {
            if (Get_User_Admin() == null)
            {
                return RedirectToAction("DangNhap", "DangNhap");
            }
            return View();
        }
        [HttpPost]
        public ActionResult Them_PN(PhieuNhap model)
        {
            try
            {
                model.TaiKhoan = Get_User_Admin();
                db.PhieuNhaps.Add(model);
                var kt = db.SaveChanges();
                if(kt > 0)
                {
                    return RedirectToAction("Them_CTPN" , new { id = model.ID_PhieuNhap });
                }
            }
            catch { }
            return View(model);
        }
        [HttpGet]
        public ActionResult Them_CTPN(int? id)
        {
            Session["id_phieunhap"] = id;
            var danhSachSanPham = db.SanPhams.ToList();
            ViewBag.DanhSachSanPham = danhSachSanPham;

            var phieunhap = db.PhieuNhaps.Find(id);
            ViewBag.nhacungcap = phieunhap.ID_NhaCungCap;
            ViewBag.ngaynhap = phieunhap.NgayNhap;

            var danhsachctpn = db.ChiTietPhieuNhaps.Where(m => m.ID_PhieuNhap == id).ToList();
            ViewBag.danhsachchitiet = danhsachctpn;

            return View(phieunhap);
        }

        [HttpPost]
        public ActionResult Them_CTPN(int? ID_SanPham, int? SoLuong, int? DonGia)
        {
            try
            {
                
                if (Get_User_Admin() == null)
                {
                    return RedirectToAction("DangNhap", "DangNhap");
                }
                

                var danhSachSanPham = db.SanPhams.ToList();
                ViewBag.DanhSachSanPham = danhSachSanPham;

                int? id_phieunhap = Session["id_phieunhap"] as int?;

                var phieunhap = db.PhieuNhaps.Find(id_phieunhap);
                ViewBag.nhacungcap = phieunhap.ID_NhaCungCap;
                ViewBag.ngaynhap = Convert.ToDateTime(phieunhap.NgayNhap).ToString("yyyy-MM-dd");

                var danhsachctpn = db.ChiTietPhieuNhaps.Where(m => m.ID_PhieuNhap == id_phieunhap).ToList();
                var sanphamTonTai = danhsachctpn.Any(m => m.ID_SanPham == ID_SanPham);

                if (sanphamTonTai)
                {
                    // Nếu sản phẩm đã tồn tại, chỉ cộng thêm số lượng
                    var chiTietDaTonTai = danhsachctpn.FirstOrDefault(m => m.ID_SanPham == ID_SanPham);
                    chiTietDaTonTai.SoLuong += SoLuong;
                    db.Entry(chiTietDaTonTai).State = EntityState.Modified;
                }
                else
                {
                    // Nếu sản phẩm chưa tồn tại, thêm mới chi tiết phiếu nhập
                    ChiTietPhieuNhap ctpn = new ChiTietPhieuNhap
                    {
                        ID_PhieuNhap = id_phieunhap,
                        ID_SanPham = ID_SanPham,
                        SoLuong = SoLuong,
                        DonGia = DonGia
                    };

                    db.ChiTietPhieuNhaps.Add(ctpn);
                }

                var kt = db.SaveChanges();
               
                if (kt > 0)
                {
                    UpdateSoLuong(ID_SanPham);
                    danhsachctpn = db.ChiTietPhieuNhaps.Where(m => m.ID_PhieuNhap == id_phieunhap).ToList();
                    ViewBag.danhsachchitiet = danhsachctpn;
                    return View();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("loi " + ex.Message);
            }
            return View();
        }

        public ActionResult Xoa_CTPN(int id , int id_sp)
        {
            var ctpn = db.ChiTietPhieuNhaps.Find(id);
            db.ChiTietPhieuNhaps.Remove(ctpn);
            int? id_phieunhap = Session["id_phieunhap"] as int?;
            
            var kt = db.SaveChanges();
            if(kt > 0)
            {
                UpdateSoLuong(id_sp);
                return RedirectToAction("Them_CTPN", new { id = id_phieunhap });
            }
            return RedirectToAction("Them_CTPN", new { id = id_phieunhap });
        }

        public ActionResult Sua_PN(int id)
        {
           
            var phieuNhap = db.PhieuNhaps.Find(id);
            // Kiểm tra ngày của phiếu nhập có phải là ngày hôm nay không
            if (phieuNhap.NgayNhap == DateTime.Now.Date)
            {
                var phieunhap = db.PhieuNhaps.Find(id);
                return View(phieunhap);
            }
            else
            {
                // Không cho phép sửa, có thể chuyển hướng hoặc hiển thị thông báo lỗi
                ViewBag.CanEdit = false;
                return RedirectToAction("DanhSach");
            }
        }
        [HttpPost]
        public ActionResult Sua_PN(PhieuNhap model)
        {
            if (Get_User_Admin() == null)
            {
                return RedirectToAction("DangNhap", "DangNhap");
            }
            var update = db.PhieuNhaps.Find(model.ID_PhieuNhap);
            update.ID_NhaCungCap = model.ID_NhaCungCap;
            update.NgayNhap = model.NgayNhap;
            var kt = db.SaveChanges();
            if(kt > 0)
            {
                return View(model);
            }
            return View();
        }
        public ActionResult Xoa_PN(int id)
        {
            var phieuNhap = db.PhieuNhaps.Find(id);
            // Kiểm tra ngày của phiếu nhập có phải là ngày hôm nay không
            if (phieuNhap.NgayNhap == DateTime.Now.Date)
            {
                db.PhieuNhaps.Remove(phieuNhap);
                db.SaveChanges();
                UpdateSoLuong();
                return RedirectToAction("DanhSach");
            }
            else
            {
                // Không cho phép sửa, có thể chuyển hướng hoặc hiển thị thông báo lỗi
                ViewBag.CanEdit = false;
                return RedirectToAction("DanhSach");
            }
        }



    }
}