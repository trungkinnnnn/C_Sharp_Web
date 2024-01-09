using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using bai_tap_lon_web_trang_suc.Models;
using PagedList;
namespace bai_tap_lon_web_trang_suc.Controllers
{
    public class SanPhamController : SessionController
    {
        private const int PageSize = 12; // Số lượng sản phẩm trên mỗi trang
        web_trang_sucEntities db = new web_trang_sucEntities();
        public ActionResult SanPham(int? page)
        {
            var sanPhams = db.SanPhams.ToList();
            var loaiSanPhams = db.LoaiSanPhams.ToList();

            // Sử dụng ToPagedList để tạo phân trang
            int pageNumber = (page ?? 1);
            var pagedSanPhams = sanPhams.ToPagedList(pageNumber, PageSize);
            ViewBag.Session = Get_User();
            ViewBag.SanPhams = pagedSanPhams;
            ViewBag.LoaiSanPhams = loaiSanPhams;
            ViewBag.soluonggiohang = demsanphamtronggiohang();

            return View(pagedSanPhams); // Truyền danh sách phân trang vào view
        }
        [HttpGet]
        public ActionResult SanPham(int? page,string[] loaiSanPhams)
        {
            // Đoạn mã xử lý tìm kiếm dựa trên loại sản phẩm được chọn
            var SanPhamS = db.SanPhams.ToList();
            Session["SelectedLoaiSanPhams"] = loaiSanPhams;

            List<SanPham> danhsachsp = new List<SanPham>();
            if (Session["SelectedLoaiSanPhams"] != null)
            {
                loaiSanPhams = (string[])Session["SelectedLoaiSanPhams"];
            }

            if (loaiSanPhams != null && loaiSanPhams.Length > 0)
            {
                foreach (var sanPham in SanPhamS)
                {
                    if (loaiSanPhams.Any(m => m == sanPham.LoaiSanPham.TenloaiSanPham))
                    {
                        danhsachsp.Add(sanPham);
                    }
                }
            }
            else
            {
                danhsachsp = SanPhamS;
            }
            // Truyền danh sách các loại sản phẩm đến view
            int pageNumber = (page ?? 1);
            var pagedSanPhams = danhsachsp.ToPagedList(pageNumber, PageSize);
            ViewBag.Session = Get_User();
            ViewBag.SanPhams = pagedSanPhams;
            ViewBag.LoaiSanPhams = db.LoaiSanPhams.ToList();
            ViewBag.soluonggiohang = demsanphamtronggiohang();
            ViewBag.check = loaiSanPhams;

            // Trả về view với danh sách sản phẩm đã lọc
            return View(pagedSanPhams);
        }

        
       
    }
}