import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

// set default config
Vue.$cookies.config('1d')

// set global cookie
Vue.$cookies.set('theme', 'default');
Vue.$cookies.set('hover-time', '1s');

Vue.config.productionTip = false

Vue.filter("dateFormatDDMMYY", function (date) {
  if (date == null) return "";
  if (date == "0001-01-01T00:00:00") return "";
  var newDate = new Date(date);
  var day = newDate.getDate();
  var month = newDate.getMonth() + 1;
  var year = newDate.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  return `${day}/${month}/${year}`;
});

Vue.filter("showDepartment", function (value) {
  if (!value) return "";
  if (value == "11452b0c-768e-5ff7-0d63-eeb1d8ed8cef") {
    return "Phòng nhân sự";
  } else if (value == "142cb08f-7c31-21fa-8e90-67245e8b283e") {
    return "Phòng marketing";
  } else if (value == "17120d02-6ab5-3e43-18cb-66948daf6128") {
    return "Phòng kế toán";
  } else if (value == "469b3ece-744a-45d5-957d-e8c757976496") {
    return "Phòng nghiên cứu";
  } else if (value == "4e272fc4-7875-78d6-7d32-6a1673ffca7c") {
    return "Phòng đào tạo";
  }
});

Vue.filter("showGender", function (value) {
  if (value == "1") {
    return "Nam";
  } else if (value == "0") {
    return "Nữ";
  } else if (value == "2") {
    return "Không xác định";
  }
})

new Vue({
  render: h => h(App),
  router,
  // EventBus,
}).$mount('#app')
