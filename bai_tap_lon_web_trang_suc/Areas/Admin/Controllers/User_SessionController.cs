using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
namespace bai_tap_lon_web_trang_suc.Areas.Admin.Controllers
{
    public class User_SessionController : Controller
    {
        // GET: Admin/User_Session
        web_trang_sucEntities db = new web_trang_sucEntities();
        protected void Set_User_Admin(string Taikhoan)
        {
            Session["TaiKhoan"] = Taikhoan;
        }

        protected string Get_User_Admin()
        {
            return Session["TaiKhoan"] as string;
        }

        public void UpdateSoLuong()
        {
            try
            {
                var updateQuery =
            from sanPham in db.SanPhams
            select new
            {
                ID_SanPham = sanPham.ID_SanPham,
                SoLuongPhieuNhap = (from ctpn in db.ChiTietPhieuNhaps
                                    where ctpn.ID_SanPham == sanPham.ID_SanPham
                                    select (int?)ctpn.SoLuong).Sum() ?? 0,
                SoLuongDonHang = (from ctdh in db.ChiTietDonHangs
                                  join dh in db.DonHangs on ctdh.ID_DonHang equals dh.ID_DonHang
                                  where ctdh.ID_SanPham == sanPham.ID_SanPham && dh.TrangThai == 1
                                  select (int?)ctdh.SoLuong).Sum() ?? 0
            };

                foreach (var item in updateQuery)
                {
                    var sanPhamToUpdate = db.SanPhams.Find(item.ID_SanPham);
                    if (sanPhamToUpdate != null)
                    {
                        var soluong = item.SoLuongPhieuNhap - item.SoLuongDonHang;
                        sanPhamToUpdate.SoLuong = soluong;
                    }
                }

                db.SaveChanges();
            }
            catch(Exception ex)
            {
                Console.WriteLine("loi " + ex.Message);
            }
            
        }

        public void UpdateSoLuong(int? id)
        {
            try
            {
                var updateQuery =
            from sanPham in db.SanPhams
            where sanPham.ID_SanPham == id
            select new
            {
                ID_SanPham = sanPham.ID_SanPham,
                SoLuongPhieuNhap = (from ctpn in db.ChiTietPhieuNhaps
                                    where ctpn.ID_SanPham == sanPham.ID_SanPham
                                    select (int?)ctpn.SoLuong).Sum() ?? 0,
                SoLuongDonHang = (from ctdh in db.ChiTietDonHangs
                                  join dh in db.DonHangs on ctdh.ID_DonHang equals dh.ID_DonHang
                                  where ctdh.ID_SanPham == sanPham.ID_SanPham && dh.TrangThai == 1
                                  select (int?)ctdh.SoLuong).Sum() ?? 0
            };

                foreach (var item in updateQuery)
                {
                    var sanPhamToUpdate = db.SanPhams.Find(item.ID_SanPham);
                    if (sanPhamToUpdate != null)
                    {
                        var soluong = item.SoLuongPhieuNhap - item.SoLuongDonHang;
                        sanPhamToUpdate.SoLuong = soluong;
                    }
                }

                db.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("loi " + ex.Message);
            }
        }

        public int get_sp_het_sl()
        {
            var sanpham_het = db.SanPhams.Where(m => m.SoLuong < 50).ToList();
            int soluong = sanpham_het.Count;
            return soluong;
        }

        public int get_don_hang_chuaduyet()
        {
            var donhang_chuaduyet = db.DonHangs.Where(m => m.TrangThai == null).ToList();
            int soluong = donhang_chuaduyet.Count;
            return soluong;
        }

        public int get_donhangmoi()
        {
            DateTime today = DateTime.Now.Date;
            var donhang_moi = db.DonHangs.Where(m => m.NgayDat == today && m.TrangThai == null).ToList();
            int soluong = donhang_moi.Count;
            return soluong;
        }



    }
}