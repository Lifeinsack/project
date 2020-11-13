import { Message } from 'element-ui';

var alertView={}

alertView.successView = (mes) => {
    Message.success(mes)
}
alertView.failView = (mes) => {
    Message.error(mes)
}

export{
  alertView
}
