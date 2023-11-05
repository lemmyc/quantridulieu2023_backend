const express = require("express");
const LMS_GET = require("../controller/lms.get.controller");
const LMS_POST = require("../controller/lms.post.controller");

const router = express.Router();


router.route("/get-readers")
  .get(LMS_GET.layDSDocGia)
router.route("/get-fines")
  .get(LMS_GET.layDSKhoanPhat)
router.route("/get-tickets")
  .get(LMS_GET.layDSMuonSach)
router.route("/get-publishers")
  .get(LMS_GET.layDSNhaXuatBan)
router.route("/get-books")
  .get(LMS_GET.layDSSach)
router.route("/get-authors")
  .get(LMS_GET.layDSTacGia)
router.route("/get-genres")
  .get(LMS_GET.layDSTheLoaiSach)


//req.query
router.route("/get-fine") // idKhoanPhat
  .get(LMS_GET.layKhoanPhat)
router.route("/get-fine-by-ticket") // idMuonSach
  .get(LMS_GET.layKhoanPhatTheoMuonSach)
router.route("/get-ticket") //idMuonSach
  .get(LMS_GET.layMuonSach)
router.route("/get-ticker-by-user") // idNguoiDung
  .get(LMS_GET.layMuonSachTheoNguoiDung)
router.route("/get-ticket-by-book") // idSach
  .get(LMS_GET.layMuonSachTheoSach)
router.route("/get-publisher") // idNhaXuatBan
  .get(LMS_GET.layNhaXuatBan)
router.route("/get-book") // idSach
  .get(LMS_GET.laySach)
router.route("/get-book-by-publisher") // tenNXB
  .get(LMS_GET.laySachTheoNXB)
router.route("/get-book-by-author") // tenTacGia
  .get(LMS_GET.laySachTheoTacGia)
router.route("/get-book-by-genre") // tenTheLoai
  .get(LMS_GET.laySachTheoTheLoai)
router.route("/get-author") // idTacGia
  .get(LMS_GET.layTacGia)
router.route("/get-genre") // idTheLoaiSach
  .get(LMS_GET.layTheLoaiSach)
router.route("/get-user-info") // idNguoiDung
  .get(LMS_GET.layThongTinNguoiDung)
router.route("/get-book-status") // idSach
  .get(LMS_GET.layTrangThaiSach)
router.route("/get-user-info-by-account") // taiKhoan
  .get(LMS_GET.layThongTinNguoiDungVoiTaiKhoan)


// Các route POST cho thêm mới dữ liệu
router.route("/add-reader") // taiKhoan, matKhau, hoTen, diaChi, soDienThoai, email
  .post(LMS_POST.themDocGia)
router.route("/add-librarian")
  .post(LMS_POST.themThuThu)
router.route("/add-fine")
  .post(LMS_POST.themKhoanPhat)
router.route("/add-ticket")
  .post(LMS_POST.themMuonSach)
router.route("/add-publisher")
  .post(LMS_POST.themNhaXuatBan)
router.route("/add-book")
  .post(LMS_POST.themSach)
router.route("/add-author")
  .post(LMS_POST.themTacGia)
router.route("/add-genre")
  .post(LMS_POST.themTheLoaiSach)



module.exports = router;