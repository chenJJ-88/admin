import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import React from 'react';
const divProps = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const NoFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return <div style={{ ...divProps }}>
    <Result
      status="404"
      title="404"
      subTitle="抱歉，这个页面暂时未找到."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          返回首页
        </Button>
      }
    />
  </div>
}



  ;

export default NoFoundPage;
