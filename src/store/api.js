import axios from 'axios'
import store from './index'

const instance = axios.create({
    baseURL: 'http://e3f7-220-135-155-67.ngrok.io/api/'
    //   baseURL: 'api/v1'
})
const download = axios.create({
    baseURL: 'http://e3f7-220-135-155-67.ngrok.io/api/',
    responseType: 'blob'
    //   baseURL: 'api/v1'
})

// Axios 相關設定區域
// Request 攔截器 (為每個Request 加入Header)
instance.interceptors.request.use(
    config => {
        config.headers.Authorization = store.state.token;
        return config;
    },
    error => {
        console.log("axios interceptor err");
        return Promise.reject(error);
    }
);


download.interceptors.request.use(
    config => {
        config.headers.Authorization = store.state.token;

        return config;
    },
    error => {
        console.log("axios interceptor err");
        return Promise.reject(error);
    }
);


// [使用者相關API]
/** 使用者登入 */
export const UserLogin = data => instance.post('users/signin', data);

/** sidebar顯示帳號 */
export const Getuser = () => instance.get('users/' + store.state.userName);

// [主頁面]
/** 列出報價單 */
export const Allpage = () => instance.get('quotations');

// [主頁面]
/** 主頁面搜尋 */
export const Mainsearch = (Search, Select) => instance.get('quotation?Signback=' + Select + "&Search=" + Search);

// [主頁面]
/** 下載PDF */
export const PDF = quotation_ID => download.get('file/' + quotation_ID);

// [主頁面]
/** 上傳回簽檔 */
export const UploadPDF = (ItemsID,File) => instance.post('file/' + ItemsID,File);

// [主頁面]
/** 刪除回簽檔 */
export const DeletePDF = quotationID => instance.delete('file/' + quotationID);

// [主頁面]
/** 顯示select */
export const Selectapi = selected => instance.get('quotations/?Signback=' + selected);

// [主頁面]
/** 刪除檔案 */
export const Deleteapi = deleteID => instance.delete('quotation/' + deleteID);

// [主頁面]
/** 查看review,編輯報價單 */
export const GetFormID = FormID => instance.get('quotation/' + FormID);

// [主頁面]
/** 預覽檔案 */
export const GetViewData = ItemsId => instance.get('quotation/' + ItemsId);

// [客戶資料頁面] [填寫表單頁面]
/** 列出客戶 */
export const Getcustomer = () => instance.get('customers');

// [客戶資料頁面]
/** 搜尋客戶 */
export const Searchcustomer = (CustomerSearch) => instance.get('customer?search=' + CustomerSearch + '&search_In=3');

// [客戶資料頁面]
/** 刪除客戶 */
export const Deletecustomer = (Customer_ID) => instance.delete('customer/' + Customer_ID);

// [編輯客戶資料頁面]
/** 拿取客戶資料 */
export const GetCustomerEdit = (EditCustomer_ID) => instance.get('customer/' + EditCustomer_ID);

// [編輯客戶資料頁面]
/** 修改客戶資料 */
export const PutCustomerEdit = (EditCustomerID,Customer) => instance.put('customer/' + EditCustomerID,Customer);

// [產品資料頁面]
/** 列出產品 */
export const Getproduce = () => instance.get('products');

// [產品資料頁面] [填寫表單頁面]
/** 產品搜尋 */
export const Searchproduce = (ProduceSearch) => instance.get('product?search=' + ProduceSearch);

// [產品資料頁面]
/** 產品刪除 */
export const Deleteproduce = (Product_ID) => instance.delete('product/' + Product_ID);

// [修改產品資料頁面]
/** 修改產品資料 */
export const PutProduceEdit = (EditProductID,Products) => instance.put('product/' + EditProductID,Products);

// [修改產品資料頁面]
/** 拿取產品資料 */
export const GetProduceEdit = (ProductID) => instance.get('product/' + ProductID);


// [追蹤頁面]
/** 列出所有項目 */
export const Gettrack = () => instance.get('quotations/status');

// [追蹤頁面]
/** select 項目 */
export const Getselect = (Trackselected, Payselected) => instance.get('quotations/status?Status=' + Trackselected + "&Payment_Status=" + Payselected);


// [追蹤頁面]
/** 搜尋項目 */
export const Getsearch = (Trackselect, Payselect, Search) => instance.get('quotations/status/search?Status=' +
    Trackselect +
    "&Payment_Status=" +
    Payselect +
    "&Search=" +
    Search);

// [追蹤頁面編輯]
/**  拿取指定項目內容 */
export const GetTrackEdit = (Item_ID) => instance.get('payment/'+Item_ID);

// [追蹤頁面編輯]
/**  修改指定項目內容 */
export const PutTrackEdit = (Item_ID,Payment) => instance.put('payment/'+Item_ID,Payment);

// [填寫表單頁面]
/**  搜尋客戶姓名 */
export const SearchCustomerName = (CustomerSearch) => instance.get('customer?search=' + CustomerSearch + '&search_In=1');

// [填寫表單頁面]
/**  搜尋客戶公司 */
export const SearchCompany = (CompanySearch) => instance.get('customer?search=' + CompanySearch + '&search_In=2');

// [填寫表單頁面]
/**  送出表單 */
export const PostForm = (Form) => download.post('/quotation',Form);
