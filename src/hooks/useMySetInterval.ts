import { onMounted, onUnmounted } from "vue";

export const mySetInterval=(fn:()=>void,fn1:(currentPage:number,pageSize:number)=>void,timeout:number,currentPage:number,pageSize:number)=> {
  
  let intervalId: NodeJS.Timeout | null = null;
  let temp: string | number | NodeJS.Timeout | undefined;

  // 控制器，控制定时器
  const intervalController = {
    flag: true,
    stop: function () {
      this.flag = false;
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      };  // 停止定时器
    },
    start: function () {
      this.flag = true;
      this.runInterval(); // 重新启动定时器
    },
    runInterval: function () {
      if (this.flag && !intervalId) {
        intervalId = setInterval(() => {
          fn();
          fn1(currentPage, pageSize);
          console.log('timer执行====');
        }, timeout);
      }
    }
  };

  // 启动定时器
  intervalController.runInterval();


  // 监听用户点击事件，暂停定时器
  const handleClick = () => {
    intervalController.stop();
    if (temp) clearTimeout(temp);  // 清除之前的恢复定时器任务
        // 设置延迟时间，恢复定时器
        temp = setTimeout(() => {
          intervalController.start();
        }, timeout);
  };

  // 恢复定时器继续执行
  const handleStopClick = () => {
    intervalController.start();
  };
  
  onMounted(() => {
    console.log("组件挂载完成，添加事件监听");
    // 页面上点击事件，暂停定时器
    // document.documentElement
    document.documentElement.addEventListener('click', handleClick);

    // 假设用户操作恢复的事件触发，例如失去焦点或其他操作
    // document.addEventListener('mouseup', handleStopClick);
  });

  onUnmounted(() => {
    console.log("组件卸载，移除事件监听");

    intervalController.stop(); // 清理定时器
    if (temp) clearTimeout(temp); // 清除延时恢复任务
    document.documentElement.removeEventListener('click', handleClick);// 移除事件监听
    // document.removeEventListener('mouseup', handleStopClick);
  });

  // 返回控制器，并提供定时器的方S法
  return intervalController;
}