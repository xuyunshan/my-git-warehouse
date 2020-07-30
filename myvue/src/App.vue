<template>
   <div class="goDemo">
    <div id="J_chartArea" style="width:100%; height:100%; background-color: #ECA;"></div>
    <div id="mygoChart" style="width:100%; height:100%; background-color: #ECA;"></div>
    
  </div>
</template>
<script>
import go from'gojs'
export default {
  name: "",
  data() {
    return {
      myDiagram:{}
    };
  },
  created() {
  },
  mounted(){
    var rps = [
            [
                {
                    key: "001",
                    title: "D1",
                    linktext:"qweqwe",
                    text: "结构项目是SSI吗？",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon01.png"
                },
                {
                    key: "002",
                    title: "P2",
                    linktext:"qweqwe",
                    text: "通过评级确定对ED、AD检查要求",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon02.png"
                },
                {
                    key: "003",
                    title: "D2",
                    linktext:"qweqwe",
                    text: "确定的ED、AD检查要求可行吗",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon03.png"
                },
                {
                    key: "004",
                    title: "D3",
                    linktext:"qweqwe",
                    text: "SSI是损伤容限或耐久性SSI吗？",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon04.png"
                },
                {
                    key: "005",
                    title: "D4",
                    linktext:"qweqwe",
                    text: "FD需用预定检查才能检出吗？",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon05.png"
                },
                {
                    key: "006",
                    title: "P4",
                    linktext:"qweqwe",
                    text: "通过评级确定对FD的检查要求",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon06.png"
                },
                {
                    key: "007",
                    title: "D5",
                    linktext:"qweqwe",
                    text: "对FD的检查要求可由对ED和AD的检查满足要求吗？",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon07.png"
                },
                {
                    key: "008",
                    title: "D6",
                    linktext:"qweqwe",
                    text: "确定的FD检查要求可行吗？",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon08.png"
                },
                {
                    key: "009",
                    title: "",
                    linktext:"qweqwe",
                    text: "修改设计",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon09.png"
                },
                {
                    key: "010",
                    title: "",
                    linktext:"qweqwe",
                    text: "修改设计",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon10.png"
                },
                {
                    key: "011",
                    title: "P5",
                    linktext:"qweqwe",
                    text: "列出SSI的ED、AD的检查要求",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon11.png"
                },
                {
                    key: "012",
                    title: "P6",
                    linktext:"qweqwe",
                    text: "列出SSI的ED、AD与FD的检查要求",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon12.png"
                },
                {
                    key: "013",
                    title: "P3",
                    linktext:"qweqwe",
                    text: "列出SSI的ED、AD的检查要求，此外，对安全寿命SSI,由承制方提出安全寿命，对静强度SSI无FD检查要求",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon12.png"
                },
                {
                    key: "014",
                    title: "P1",
                    linktext:"qweqwe",
                    text: "按以往经验或承制方建议确定NSI的适当工作",
                    "bgSrc": "./images/bg01.png",
                    "iconSrc": "./images/icon12.png"
                }
            ],
            [
                {from: "001", to: "002"},
                {from: "001", to: "014"},
                {from: "002", to: "003"},
                {from: "003", to: "004"},
                {from: "003", to: "009"},
                {from: "004", to: "005"},
                {from: "004", to: "013"},
                {from: "005", to: "006"},
                {from: "005", to: "011"},
                {from: "006", to: "007"},
                {from: "006", to: "011"},
                {from: "007", to: "008"},
                {from: "008", to: "010"},
                {from: "008", to: "012"},
            ]
        ];
    this.func(rps);
    this.func1();
  },
  methods:{
    func1(){
      var mySelf = this;
      const MAKE = go.GraphObject.make;
        mySelf.myDiagram  = MAKE(go.Diagram, "mygoChart",{
                          initialContentAlignment: go.Spot.Center, //设置整个图表在容器中的位置 https://gojs.net/latest/api/symbols/Spot.html
                          allowZoom: true,
                          "grid.visible": false,//是否显示背景栅格
                          "grid.gridCellSize": new go.Size(5, 5),//栅格大小
                          "commandHandler.copiesTree": false,  // 禁用复制快捷键
                          "commandHandler.deletesTree": false, // 禁用删除快捷键
                          "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom, //启用视图放大缩小
                          allowLink: false,//是否允许拖拽连线
                          allowRelink: false,//是否允许重新连线
                          padding: 10,
                          //布局设置 https://gojs.net/latest/api/symbols/Layout.html
                          //LayeredDigraphLayout布局 https://gojs.net/latest/api/symbols/LayeredDigraphLayout.html
                          layout: MAKE(go.LayeredDigraphLayout,
                                  {direction: 90, layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource}),//0向右，90向下，180向左，270向上。默认值是0
                          "undoManager.isEnabled": false //是否启用撤销回退 Ctrl-Z Ctrl-Y
                      });//构建gojs对象
        console.log(mySelf.myDiagram);
        mySelf.myDiagram.addDiagramListener("ObjectSingleClicked",function (e) {
          debugger
          console.log(e.subject.part);
            
        });
  
        mySelf.myDiagram.addDiagramListener("BackgroundSingleClicked",function (e) {
          debugger
          console.log("Double-clicked at" + e.diagram.lastInput.documentPoint);
        });
  
        mySelf.myDiagram.addDiagramListener("ClipboardPasted",function (e) {
          debugger
          console.log("Pasted" + e.diagram.selection.count + "parts");
        });
  
      // define a simple Node template
      // 定义个简单的 Node 模板
      mySelf.myDiagram.nodeTemplate =
        MAKE(go.Node,
        new go.Binding("location", "loc", go.Point.parse),
        MAKE(go.Shape, "RoundedRectangle", { fill: "#fff",stroke: '#000',strokeWidth:2,angle:0 }),
        "Auto",//Vertical,Auto,Horizontal
          // 为整个Node背景设置为浅蓝色
          // { background: "#fff" },
          
          // MAKE(go.Picture,
          //   // Pictures 应该指定宽高.
          //   // 当没有图片时显示红色的背景
          //   // 或者当图片为透明的时候也是.
          //   { source:"../assets/img/01.png",margin: 10, width: 50, height: 50, background: "red" },
          //   // Picture.source参数值与模型数据中的"source"字段绑定
          //   new go.Binding("source")),
          // MAKE(go.TextBlock,
          //   "Default Text",  // 初始化默认文本
          //   // 文字周围的空隙, 大号字体, 白色笔画:
          //   { margin: 12, stroke: "white", font: "bold 16px sans-serif",
          //     width:75,
          //     wrap: go.TextBlock.WrapDesiredSize
          //   },
          //   // TextBlock.text参数值与模型数据中的"name"字段绑定
          //   new go.Binding("text", "name1")),
            MAKE(go.Panel, "Horizontal",{padding:5},
              MAKE(go.Panel, "Vertical",
                MAKE(go.TextBlock,
                        {
                            row: 1,
                            column: 1,
                            stroke: "#000",
                            font: "8pt sans-serif",
                            wrap: go.TextBlock.WrapFit,//文本换行
                            desiredSize: new go.Size(150, 50),//期望的区域尺寸
                            alignment: go.Spot.Left,
                            margin: new go.Margin(5, 0, 0, 5)
                        },
                        new go.Binding("text", "name1")
                )
              ),
            ),
            {
              mouseEnter:function(e,node,prev){
                console.log('mouseEnter');
              },
              mouseLeave:function(e,node,prev){
                mySelf.detailShow = false;
              },
            },
        );
        mySelf.myDiagram.linkTemplate = MAKE(go.Link,
          //{ curve: go.Link.Bezier },  // 贝塞尔曲线
          { routing: go.Link.Orthogonal, corner: 5 },
          MAKE(go.Shape, { strokeWidth: 2, stroke: "#e4393c" }),
          MAKE(go.Shape, { toArrow:"Standard",fill:"#000",stroke:null }),//箭头
          MAKE(go.TextBlock,
            {
              //margin: 20,
              stroke: "black",
              //font: "14px sans-serif",
              //width:50,
              //wrap: go.TextBlock.WrapDesiredSize
            },
            new go.Binding("text", "linktext")),
          );// the link shape
      let myModel = MAKE(go.TreeModel);
      myModel.nodeDataArray =
      [{key:"1", name1: "项目结构是SSI吗", img: require("./assets/img/01.png"), },
        {key:"2", parent:"1", name1: "按以往经验或承制方建议确定NSI的适当工作",  linktext:"否", img: require("./assets/img/03.png") },
        {key:"3", parent:"1", name1: "通过评级确定对ED、AD检查要求",   linktext:"是", img: require("./assets/img/01.png") },
        {key:"4", parent:"3", name1: "确定的ED、AD检查要求可行吗",   linktext:"是", img: require("./assets/img/02.png") },
        {key:"5", parent:"4", name1: "SSI是损伤容限或耐久性SSI吗",   linktext:"是", img: require("./assets/img/01.png") },
        {key:"6", parent:"4", name1: "修改设计",   linktext:"否", img: require("./assets/img/01.png") },
        {key:"7", parent:"5", name1: "FD需用预定检查才能检出吗",   linktext:"是", img: require("./assets/img/01.png") },
        {key:"8", parent:"7", name1: "通过评级确定对FD的检查要求",   linktext:"是", img: require("./assets/img/01.png") },
        {key:"10", parent:"7", name1: "列出SSI的ED、AD的检查要求",   linktext:"否", img: require("./assets/img/01.png") },
        {key:"11", parent:"8", name1: "对FD的检查要求可由对ED和AD的检查满足要求吗？",   linktext:"", img: require("./assets/img/01.png") },
        {key:"9", parent:"5", name1: "列出SSI的ED、AD的检查要求，此外，对安全寿命SSI,由承制方提出安全寿命，对静强度SSI无FD检查要求", linktext:"否", img: require("./assets/img/01.png") },
      ];
      mySelf.myDiagram.model = myModel;
    },
    func(rps){

            var MAKE = go.GraphObject.make; //构建GoJS对象
            //参数设置 https://gojs.net/latest/api/symbols/Diagram.html
            var myDiagram = MAKE(go.Diagram, "J_chartArea",
                    //图表整体属性设置
                    {
                        initialContentAlignment: go.Spot.Center, //设置整个图表在容器中的位置 https://gojs.net/latest/api/symbols/Spot.html
                        allowZoom: true,
                        "grid.visible": false,//是否显示背景栅格
                        "grid.gridCellSize": new go.Size(5, 5),//栅格大小
                        "commandHandler.copiesTree": false,  // 禁用复制快捷键
                        "commandHandler.deletesTree": false, // 禁用删除快捷键
                        "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom, //启用视图放大缩小
                        allowLink: false,//是否允许拖拽连线
                        allowRelink: false,//是否允许重新连线
                        padding: 10,
                        //布局设置 https://gojs.net/latest/api/symbols/Layout.html
                        //LayeredDigraphLayout布局 https://gojs.net/latest/api/symbols/LayeredDigraphLayout.html
                        layout: MAKE(go.LayeredDigraphLayout,
                                {direction: 90, layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource}),//0向右，90向下，180向左，270向上。默认值是0
                        "undoManager.isEnabled": false //是否启用撤销回退 Ctrl-Z Ctrl-Y
                    });

            myDiagram.linkTemplate =
                //设置连接线 https://gojs.net/latest/intro/links.html
                    // MAKE(go.Link,
                    //         //设置连接线属性
                    //         {
                    //             relinkableFrom: true,
                    //             relinkableTo: true,
                    //             corner: 12,
                    //             routing: go.Link.Orthogonal,
                    //             curve: go.Link.JumpOver
                    //         },
                    //         MAKE(go.Shape, {stroke: "#46bee9", strokeWidth: 2}),
                    //         //设置箭头
                    //         MAKE(go.Shape, {toArrow: "Standard", stroke: "#46bee9", fill: "#46bee9"})
                    // );
                    MAKE(go.Link,
                      //{ curve: go.Link.Bezier },  // 贝塞尔曲线
                      { routing: go.Link.Orthogonal, corner: 5 },
                      MAKE(go.Shape, { strokeWidth: 2, stroke: "#e4393c" }),
                      MAKE(go.Shape, { toArrow:"Standard",fill:"#000",stroke:null }),//箭头
                      // MAKE(go.TextBlock,
                      //   {
                      //     //margin: 20,
                      //     stroke: "black",
                      //     //font: "14px sans-serif",
                      //     //width:50,
                      //     //wrap: go.TextBlock.WrapDesiredSize
                      //   },
                      //   new go.Binding("text", "linktext")),
                    );// the link shape
            myDiagram.nodeTemplate =
                    MAKE(go.Node, "Horizontal",//将多个GraphObjects比如下面的Panel和Button元素垂直对齐还是水平对齐
                            {portId: "", fromLinkable: true, toLinkable: true},
                            MAKE(go.Panel, "Table",
                                    {
                                        defaultAlignment: go.Spot.Left
                                    },
                                    //图片元素设置-背景图 https://gojs.net/latest/intro/pictures.html
                                    MAKE(go.Picture,
                                            {width: 208, height: 102},
                                            new go.Binding("source", "bgSrc")),
                                    MAKE(go.Panel, "Table",
                                            {defaultAlignment: go.Spot.Left},
                                            MAKE(go.RowColumnDefinition, {column: 0, width: 48}),
                                            //设置文本块元素-标题
                                            MAKE(go.TextBlock,
                                                    {
                                                        row: 0,//所在行
                                                        column: 1,//所在列
                                                        columnSpan: 2,//合并列
                                                        fromLinkable: false,
                                                        toLinkable: false,
                                                        alignment: go.Spot.Left,//文本对齐
                                                        stroke: "#fff",//颜色
                                                        margin: new go.Margin(5, 0, 0, 5),//边距
                                                        font: "12pt helvetica, arial, sans-serif"//文字样式
                                                    },
                                                    new go.Binding("text", "title"),//绑定数据
                                                    
                                            ),
                                            //设置图片-Icon小图标
                                            MAKE(go.Picture,
                                                    {
                                                        row: 1,
                                                        column: 0,
                                                        width: 48,
                                                        height: 48,
                                                        background: "transparent",
                                                        alignment: go.Spot.Center,
                                                        margin: new go.Margin(0, 0, 0, 5)
                                                    },
                                                    new go.Binding("source", "iconSrc")),
                                            //设置文本块-详情
                                            MAKE(go.TextBlock,
                                                    {
                                                        row: 1,
                                                        column: 1,
                                                        stroke: "#fff",
                                                        font: "8pt sans-serif",
                                                        wrap: go.TextBlock.WrapFit,//文本换行
                                                        desiredSize: new go.Size(150, 50),//期望的区域尺寸
                                                        alignment: go.Spot.Left,
                                                        margin: new go.Margin(5, 0, 0, 5)
                                                    },
                                                    new go.Binding("text", "text")
                                            )
                                    )
                            ),
                            //设置展开收缩按钮
                            // MAKE("Panel",
                            //         {width: 12, height: 12},
                            //         MAKE(go.Picture,
                            //                 {width: 12, height: 12, source: "./images/button.png"},
                            //                  new go.Binding("visible", "isTreeLeaf",
                            //                         function (leaf) {
                            //                             return !leaf;
                            //                         })
                            //                         .ofObject()),
                            //         MAKE(go.Panel, "Table",
                            //                 {visible: false, desiredSize: new go.Size(12, 12)},
                            //                 //绑定自定义数据
                            //                 new go.Binding("visible", "isTreeLeaf",
                            //                         function (leaf) {
                            //                             return !leaf;
                            //                         })
                            //                         .ofObject(),
                            //                 MAKE(go.Shape,
                            //                         {
                            //                             name: "ButtonIcon",
                            //                             figure: "MinusLine",//自动生成几何图形 这里生成“-”
                            //                             desiredSize: new go.Size(7, 7)//尺寸
                            //                         },
                            //                         new go.Binding("figure", "isCollapsed",// 根据collapsed函数的返回值设置图形是“+”还是“-”
                            //                                 function (collapsed) {
                            //                                     return collapsed ? "PlusLine" : "MinusLine";
                            //                                 })),
                            //                 {
                            //                     click: function (e, obj) {
                            //                         e.diagram.startTransaction();
                            //                         var node = obj.part;
                            //                         if (node.data.isCollapsed) {
                            //                             expandFrom(node, node);
                            //                         } else {
                            //                             collapseFrom(node, node);
                            //                         }
                            //                         e.diagram.commitTransaction("toggled visibility of dependencies");
                            //                     }
                            //                 }
                            //         )
                            // )
                    );
            //收缩
            // function collapseFrom(node, start) {
            //     if (node.data.isCollapsed) return;
            //     node.diagram.model.setDataProperty(node.data, "isCollapsed", true);
            //     if (node !== start) node.visible = false;
            //     node.findNodesOutOf().each(collapseFrom);
            // }

            // //展开
            // function expandFrom(node, start) {
            //     if (!node.data.isCollapsed) return;
            //     node.diagram.model.setDataProperty(node.data, "isCollapsed", false);
            //     if (node !== start) node.visible = true;
            //     node.findNodesOutOf().each(expandFrom);
            // }

            //数据
            myDiagram.model = new go.GraphLinksModel(rps[0], rps[1]);
            //绑定元素点击事件
            myDiagram.addDiagramListener("ObjectSingleClicked",
                    function (e) {
                        var part = e.subject.part;
                        if (!(part instanceof go.Link)) {
                            console.info(part.data.key)
                        }
                    });
        }
    }
  }
</script>
<style lang='scss'>
.goDemo{
  width: 100%;
  height: 700px;
}
</style>
