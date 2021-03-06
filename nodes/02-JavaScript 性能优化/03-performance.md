### 为什么使用 Performance
- GC的目的是为了实现内存空间的良性循环
- 良性循环的基石是合理使用
- 时刻关注才能确定是否合理
- performance 提供多种监控方式

### 内存问题的外在表现
- 页面出现延迟加载或者经常性暂停
- 页面持续性出现糟糕的性能
- 页面的性能随时间延长越来越差

### 界定内存问题的标准
- 内存泄露：内存使用持续升高
- 内存膨胀：在多数设备上都存在性能问题（说明是代码问题）
- 频繁垃圾回收：通过内存变化图进行分析

### 监控内存的几种方式
- 浏览器任务管理器
- Timeline 时序图记录
- 堆快照查找分离 DOM
- 判断是否存在频繁的垃圾回收

### 什么是分离 DOM
- 界面元素存活在 DOM 数上
- 垃圾对象时的 DOM 节点 （DOM树上没有，JS中也没有引用）
- 分离状态的 DOM 节点（DOM树上没有，JS中有引用）

### 为什么确定频繁垃圾回收
- GC工作时应用程序是停止的
- 频繁且过长的GC会导致应用假死
- 用户使用中感知应用卡顿

### 确定频繁的垃圾回收
- Timeline 中数据的上升下降
- 任务管理器中数据频繁的增加减小