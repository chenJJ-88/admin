import axios from "axios";
import { jsonToRul } from "@/utils";
import { notification } from 'antd'
const codeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
class RequestError extends Error {
  response: any;
  constructor(message: string, status: number, response: any) {
    super(message);
    this.name = String(status);
    this.response = response;
  }
}
const checkStatus = (response: any) => {

  // 错误处理
  if ((response.status >= 200 && response.status < 300) || response.status === 400 || response.status === 500) {
    return response
  }

  const errText = response.statusText || codeMessage[response.status]
  notification.error({
    message: `请求错误${response.status}:${errText}`
  })

  throw new RequestError(errText, response.status, response)
}

const checkServerCode = (response: { code: string | number; data: any; msg: any; headers: any }, newOptions: { showMsg: any; }) => {
  let tempCode = Number(response.code);

  if (tempCode >= 200 && tempCode < 300) {
    if (newOptions.showMsg && !response.data) {
      notification.success({
        message: response.msg || codeMessage[response.code]
      });
    }
    return {
      success: true,
      ...response
    };
  }
  if (!newOptions.showMsg) {
    return response;
  }

  if (tempCode === 400) {
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
  } else if (tempCode === 401) {
    if (window.location.hash.endsWith('/login')) return false;
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
    location.replace('/login');
  } else if (tempCode === 404) {
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
  } else if (tempCode === 500) {
    notification.error({
      message: response.msg || codeMessage[response.code]
    });
  }
  return response;
};
export default function request(url: string, options: any): Promise<any> {
  const defaultOptions = {
    credentials: 'include',
    method: 'POST'
  }
  const newOptions = {
    ...options,
    defaultOptions
  }
  newOptions.headers = {
    ...newOptions.headers,
  }
  let fetchUrl = url;
  if (['POST', 'DELETE', 'PUT', 'PATCH'].includes(newOptions.method)) {
    newOptions.headers = {
      ...newOptions.headers,
      "Accept": "application/json",
      "Content-Type": newOptions.method === 'POST' && !(newOptions.data instanceof FormData) ? "application/json;charset=utf-8" : undefined
    }
  }

  if (newOptions.params) {//公司后端post 请求还是将请求参数放在query上
    fetchUrl = url + "?" + jsonToRul(newOptions.params)
  }
  return fetch(
    fetchUrl,
    newOptions
  ).then(checkStatus)
    .then(res => {
      const token = res.headers.get('Authorization');
      if (token) {
        localStorage.setItem('token', token);
      }
      if (res.method === 'DELETE' || res.status === 204 || res.status === 205) {
        return res.text()
      }
      return res.json();
    })
    .then(res => {
      return checkServerCode(res, newOptions)
    })
    .catch(error => {
      if (error instanceof RequestError) {//如果是自己定义的error
        console.log(error.message);

      } else {
        // 处理其他类型的错误...
        console.error(error);
      }
    })
} 