
function fun(){
  console.log('触发了视图更新');
}

function defineReavtive(data,key,val) {

  observer(val)//深度监听
  return Object.defineProperty(data,key,{
    get(){
      return val;
    },
    set(newVal){
      if(val !== newVal){
        observer(newVal);//深度监听
        val = newVal;
        fun();
      }
    }
  })
}

function observer(target){
  if(typeof target !== 'object' || target == null){
    return target;
  }

  for(let key in  target){
    defineReavtive(target,key,target[key])
  }
}

let data = {
  name:'zs',
  age:21,
  info:{
    a:1
  }
};
observer(data);
data.name = 'alex';
data.age = 23
data.info.a = 2