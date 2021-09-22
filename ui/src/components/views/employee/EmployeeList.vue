<template>
	<div class="" >
		<div class="box">
			<div class="content-item">
				<div class="content-item-text">Nhân viên</div>
				<div class="component-btn">
					<button class="btn-btn color">
						Thêm mới nhân viên
					</button>
				</div>
			</div>
		</div>
		<div class="content-table">
			<div class="item">
				<div></div>
				<div class="item-right">
					<input
						type="text"
						placeholder="Tìm theo mã, tên nhân viên"
						class="input-search2 input"
					/>
					<div
						class="content-icon refresh"
						title="Lấy lại dữ liệu"
					></div>

				</div>
			</div>
			<div class="content-table-height">
				<table
					class="tblListEmployee"
					width="100%"
				>
					<thead>
						<tr>
							<td class="table-input-checkbox fix-left">
								<input
									type="checkbox"
									class="check-box"
								/>
							</td>
							<th style="min-width: 130px; border-left:none;">MÃ NHÂN VIÊN</th>
							<th style="min-width: 200px">TÊN NHÂN VIÊN</th>
							<th>GIỚI TÍNH</th>
							<th style="align-items: center;text-align: center;">NGÀY SINH</th>
							<th style="min-width: 200px">SỐ CMND</th>
							<th style="min-width: 230px">CHỨC DANH</th>
							<th style="min-width: 230px">TÊN ĐƠN VỊ</th>
							<th>SỐ TÀI KHOẢN</th>
							<th style="min-width: 230px">TÊN NGÂN HÀNG</th>
							<th style="min-width: 195px">CHI NHÁNH TK NGÂN HÀNG</th>
							<th class="table-right-style">CHỨC NĂNG</th>

						</tr>
					</thead>
					<tbody>
						<tr
							v-for="(employee, index) in employees"
							:key="index"
						>
							<td class=" fix-left1">
								<input
									type="checkbox"
									class="check-box"
								/>
							</td>
							<td>{{ employee.employeeCode }}</td>
							<td style="min-width: 230px">{{ employee.employeeName }}</td>
							<td>{{ employee.gender | showGender }}</td>
							<td style="align-items: center;text-align: center;">
								{{ employee.dateOfBirth | dateFormatDDMMYY }}
							</td>
							<td style="min-width: 200px">{{ employee.identityNumber }}</td>
							<td style="min-width: 230px">{{ employee.employeePosition }}</td>
							<td style="min-width: 230px">
								{{ employee.departmentId | showDepartment }}
							</td>
							<td>{{ employee.bankAccountNumber }}</td>
							<td style="min-width: 230px">{{ employee.bankName }}</td>
							<td>{{ employee.bankBranchName }}</td>

							<div
								class="table-right-style1"
								:style="{ 'z-index': 100 - index }"
							>
								<div class="btn-edit">
									<button class="btn-btn hover">
										<div class="flex btn-btn-text">
											<span
												class="pr-4"
												style="color: #0075c0; font-weight: 600"
											>Sửa</span>
										</div>
									</button>
								</div>

							</div>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="content-navpage">
				<div class="content-navpage-text-left">
					Tổng số: {{ totalRecord }} bản ghi
				</div>
				<div class="footer-complete">
					<select
						name=""
						id=""
					>
						<option value="10">10 bản ghi trên 1 trang</option>
						<option value="20">20 bản ghi trên 1 trang</option>
						<option value="30">30 bản ghi trên 1 trang</option>
						<option value="50">50 bản ghi trên 1 trang</option>
						<option value="100">100 bản ghi trên 1 trang</option>
					</select>

				</div>
			</div>
		</div>

		<div
			class="fa-3x"
			v-if="isBusy"
		>
			<i
				class="fas fa-spinner fa-spin"
				style="color: green;"
			></i>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

const myhost = "http://localhost:3000"
export default {
	components: {
	},
	props:{
		colapseClick :{ type: Boolean, default: false },
	},
	data() {
		return {
			employees: [],
			isBusy: false, // Trạng thái của icon Loading
		};
	},
	created() {
		this.loadData()
	},
	methods: {
		loadData() {
			const userData = this.$cookies.get("user")
			this.isBusy = true;
			axios
				.get(myhost + `/employees?userId=${userData.id}`)
				.then((response) => {
					console.log(response);
					// var employees1 = response.data;
					// Gán tổng số bản ghi bằng độ lớn của mảng trả về
					this.employees = response.data;
				})
				.catch((response) => {
					console.log(response);
				})
				.then(() => {
					// Load xong thì tắt icon load
					this.isBusy = false;
				});
		}
	}
};
</script>
<style scoped>
@import url('../../styles/table.css');

.content .box {
	padding: 22px 0px 16px 0px;
}
.box .content-item {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.content-item .content-item-text {
	font-size: 24px;
	color: black;
	background-size: contain;
	background-position: center;
	font-weight: bold;
}
.component-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.btn-utilities {
	display: flex;
	margin-right: 12px;
}
.btn-edit {
	position: relative;
	display: flex;
	align-items: center;
	/* z-index: 100; */
}
.btn-btn {
	padding: 0 16px;
	border-radius: 4px;
	color: #111;
	height: 36px;
	position: relative;
	border: 1px solid #8d9096;
	background-color: transparent;
	transition: all 0.2s ease;
	cursor: pointer;
	box-sizing: border-box;
	background: 0 0;
	overflow: visible;
	outline: none;
}
.btn-btn-text {
	font-weight: 600;
	position: relative;
	color: inherit;
	display: inline-block;
	transition: all 0.25s ease;
	white-space: nowrap;
	font-size: 13px;
	line-height: 13px;
	justify-content: center;
	align-items: center;
}
.pr-4 {
	padding-right: 4px !important;
}

.flex {
	display: flex !important;
}
.header-icon {
	background: url("../../../assets/Sprites.5f05e81f.svg") no-repeat;
	cursor: pointer;
	min-width: 16px;
	min-height: 16px;
	height: 16px;
	width: 16px;
}
.arrow-up--black {
	background-position: -560px -359px;
}
.arrow-up--white {
	background-position: -848px -359px;
}
.line {
	left: -16px;
	height: 20px;
	top: 0;
	position: absolute;
	border: 1px solid transparent;
	border-left-color: #fff;
}
.color {
	color: #fff;
	background-color: #2ca01c;
	padding: 8px 20px 8px 20px;
	height: 36px;
	/* border-radius: 30px 0 0 30px; */
	border: none;
}
.color:hover {
	background-color: #2eb31c;
	color: #fff;
}
.border {
	border-radius: 0 30px 30px 0;
	border: none;
}
.back {
	cursor: pointer;
	width: max-content;
	justify-items: center;
	align-items: center;
	color: #0075c0;
}
.chevron-left--primary {
	background-position: -224px -360px;
}
.content-icon {
	background: url("../../../assets/Sprites.5f05e81f.svg") no-repeat;
	cursor: pointer;
	min-width: 24px;
	min-height: 24px;
	margin-left: 8px;
	height: 24px;
	width: 24px;
}

.content .content-table {
	background-color: white !important;
	position: absolute;
	top: 95px;
	bottom: 0;
	right: 30px;
	left: 20px;
}
.content-table .item {
	padding: 16px 10px 10px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tblListEmployee table tr,
th {
	display: table-cell;
	cursor: pointer;
	padding: 0 10px;
}
.tblListEmployee table tr:hover {
	background-color: #d4f0f0;
}
.tblListEmployee .fix-left {
	z-index: 5;
	position: sticky;
	top: 0;
	display: table-cell;
	left: 0px;
	border-right: 1px dotted #c7c7c7;
}
.tblListEmployee .fix-left1 {
	z-index: 4;
	position: sticky;
	top: 0px;
	display: table-cell;
	left: 0px;
	border-right: 1px dotted #c7c7c7;
	/* max-width: 40px !important;
  
  width: 34px; */
}
.tblListEmployee .table-right-style {
	min-width: 120px;
	/* position: relative; */
	/* display: flex; */
	top: 0px;
	right: 0;
	align-items: center;
	text-align: center;
	border-right: none;
	width: 60px;
	border-left: 1px solid #c7c7c7;
	z-index: 101;
	/* border-left: 1px dotted #c7c7c7; */
}
.tblListEmployee .table-right-style1 {
	min-width: 120px;
	position: sticky;
	display: flex;
	text-align: center;
	align-items: center;
	top: 0;
	right: 0;
	padding: 0 18px;
	border-right: none;
	width: 60px;
	/* z-index: 6; */
	border-left: 1px dotted #c7c7c7;
	background: #fff;
}
.table-input-checkbox {
	border-right: 1px solid #c7c7c7;
	background-color: #eceef1;
	max-width: 40px !important;
	align-items: center;
	/* display: flex; */
	width: 40px;
}
.item .item-right {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.content-table .content-table-height {
	height: calc(100% - 150px);
	overflow-y: auto;
	margin: 0 24px 0 16px;
}
.refresh {
	background-position: -423px -201px;
}
.excel__nav {
	background-position: -704px -200px;
}
.setting__list {
	background-position: -88px -200px;
}
.check-box {
	height: 16px;
	width: 18px;
}
.content-navpage {
	position: absolute;
	height: 60px;
	bottom: 0;
	right: 24px;
	box-sizing: border-box;
	left: 16px;
	/* border-top: 1px solid #a29d9d; */
	align-items: center;
	display: flex;
	justify-content: space-between;
}

/* .content-navpage .content-navpage-text-left {
  margin-left: 10px;
} */
.content-navpage .content-navpage-button {
	display: flex;
}
.content-navpage .content-navpage-text-right {
	margin-right: 10px;
}
.arrow-up--blue {
	background-position: -896px -359px;
}
.hover {
	border: none;
	padding: 6px 0px 6px 16px;
}
.padding {
	padding: 0 0 0 10px;
}
/* .hoverxx {
} */
.hoverxx:hover {
	background-color: #eceaea;
}
.fa-3x {
	position: absolute;
	left: 45%;
	top: 43%;
	transform: translate(-50%, -50%);
	/* background-image: url('../../../assets/loading.svg'); */
}

.dropdown {
	position: relative;
}

.dropdown .dropdown-content {
	position: absolute;
	height: 93px;
	width: 123px;
	right: -25px;
	top: 30px;
	background: red;
	z-index: 1000;
}
.display {
	display: none;
}

.footer-complete {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.autocomplete {
	display: flex;
	min-height: 32px;
	border: 1px solid #babec5;
	border-radius: 2px;
	background-color: #fff;
	height: 32px;
	width: 200px;
}
.selected-option {
	display: flex;
	flex-basis: 100%;
	flex-grow: 1;
	flex-wrap: wrap;
	width: calc(100% - 32px);
	align-items: center;
	padding: 6px 0 6px 12px;
}
.style {
	border: none;
	background-color: white;
}
.margin {
	margin-left: 20px;
}
.disable {
	cursor: not-allowed;
}
.active {
	font-weight: 700;
}
/**
Scroll
*/
::-webkit-scrollbar {
	width: 8px;
	height: 10px;
}
/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 8px;
}
/* Handle */
::-webkit-scrollbar-thumb {
	background: #bbb;
	border-radius: 8px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}
</style>
