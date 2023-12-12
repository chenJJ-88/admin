import React, { useState, useEffect, useRef } from 'react';
import Particles from '@/components/Particles'
import { Form, Input, Button, Space } from 'antd';
import styles from './index.module.less'
import { LoginProps } from './typing'
import request from '@/utils/requets';
import { message } from 'antd/lib';
const formItemCol = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
}
function Index() {
  const [form] = Form.useForm();
  const onfinsh = (value: LoginProps) => {

    request(
      '/adminApi/user/login',
      {
        method: "POST",
        body: JSON.stringify({
          ...value
        })
      }
    ).then(res => {
      if (res.code === 200) {
        message.success('登录成功')
        window.location.href = '/home'
      } else {
        message.error('账号密码错误')
      }
    })
  }
  return (
    <div className={styles['loginBox']}>
      <Particles></Particles>
      <div className={styles['container']}>
        <h3>企业门户管理系统</h3>
        <Form onFinish={onfinsh} form={form}>
          <Form.Item  {...formItemCol} name='username' required label='用户名'>
            <Input></Input>
          </Form.Item>
          <Form.Item  {...formItemCol} name='password' required label='密码'>
            <Input type='password'></Input>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button htmlType='submit'>登录</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Index; 
