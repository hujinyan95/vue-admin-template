import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  }
}
const menuMock = {
  "invokerCode": "SUCCESS",
  "invokerMsg": "OK",
  "hostRspCode": "00000",
  "hostRspMsg": "操作成功",
  "response": {
    "function": [
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "#1",
        "FUNCNAME": "个贷数字管理",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "uc:privrole?applno=105",
        "APPLNO": "105",
        "INNERNO": "#10",
        "FUNCDESC": "",
        "FUNCNAME": "权限分配",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "order/view/orderList",
        "APPLNO": "105",
        "INNERNO": "#11",
        "FUNCDESC": "",
        "FUNCNAME": "录单订单查询",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "order/view/projectList",
        "APPLNO": "105",
        "INNERNO": "#12",
        "FUNCDESC": "",
        "FUNCNAME": "录单项目管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "order/view/projectListToBatch",
        "APPLNO": "105",
        "INNERNO": "#13",
        "FUNCDESC": "",
        "FUNCNAME": "批量录单",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "order/view/orderModify",
        "APPLNO": "105",
        "INNERNO": "#14",
        "FUNCDESC": "",
        "FUNCNAME": "录单内容修改",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "/dkyx/view/dkyxCode",
        "APPLNO": "105",
        "INNERNO": "#1_1",
        "FUNCNAME": "营销二维码生成",
        "PINNERNO": "#1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "APPLNO": "105",
        "INNERNO": "#1_10",
        "FUNCNAME": "角色维护",
        "PINNERNO": "#1",
        "LEAF": "0"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "/accRole/view/accRole",
        "APPLNO": "105",
        "INNERNO": "#1_10_1",
        "FUNCNAME": "客户经理角色维护",
        "PINNERNO": "#1_10",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "/accRole/view/accMgr",
        "APPLNO": "105",
        "INNERNO": "#1_10_2",
        "FUNCNAME": "客户经理维护",
        "PINNERNO": "#1_10",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "APPLNO": "105",
        "INNERNO": "#1_11",
        "FUNCNAME": "代理机构维护",
        "PINNERNO": "#1",
        "LEAF": "0"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "/agent/view/agentFirstMgr",
        "APPLNO": "105",
        "INNERNO": "#1_11_1",
        "FUNCNAME": "一手房合作机构",
        "PINNERNO": "#1_11",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "/agent/view/agentSecMgr",
        "APPLNO": "105",
        "INNERNO": "#1_11_2",
        "FUNCNAME": "二手房合作机构",
        "PINNERNO": "#1_11",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "APPLNO": "105",
        "INNERNO": "#1_12",
        "FUNCNAME": "普惠报表管理",
        "PINNERNO": "#1",
        "LEAF": "0"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/PHinstRpt",
        "APPLNO": "105",
        "INNERNO": "#1_12_1",
        "FUNCNAME": "机构报表查询",
        "PINNERNO": "#1_12",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/PHmgrRpt",
        "APPLNO": "105",
        "INNERNO": "#1_12_2",
        "FUNCNAME": "客户经理报表查询",
        "PINNERNO": "#1_12",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/PHflowRpt",
        "APPLNO": "105",
        "INNERNO": "#1_12_3",
        "FUNCNAME": "流程信息报表查询",
        "PINNERNO": "#1_12",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "dkflow/view/newLoan",
        "APPLNO": "105",
        "INNERNO": "#1_13",
        "FUNCNAME": "新增贷款",
        "PINNERNO": "#1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "dash:dash?rptid=12000081&rptkey=567E323FFF6FAC44A25CE766CC0B4236",
        "APPLNO": "105",
        "INNERNO": "#1_14",
        "FUNCNAME": "大屏展示",
        "PINNERNO": "#1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "dkyx/view/integrationCode",
        "APPLNO": "105",
        "INNERNO": "#1_16",
        "FUNCDESC": "",
        "FUNCNAME": "浙里贷二维码生成",
        "PINNERNO": "#1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "dkflow/view/flowMgr",
        "APPLNO": "105",
        "INNERNO": "#1_2",
        "FUNCNAME": "个贷流转二维码生成",
        "PINNERNO": "#1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "dkflow/view/flowList",
        "APPLNO": "105",
        "INNERNO": "#1_6",
        "FUNCNAME": "个贷流转处理",
        "PINNERNO": "#1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "APPLNO": "105",
        "INNERNO": "#1_7",
        "FUNCNAME": "报表管理",
        "PINNERNO": "#1",
        "LEAF": "0"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/instRpt",
        "APPLNO": "105",
        "INNERNO": "#1_7_1",
        "FUNCNAME": "机构报表查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/integrationOrgRpt",
        "APPLNO": "105",
        "INNERNO": "#1_7_10",
        "FUNCDESC": "",
        "FUNCNAME": "浙里贷机构报表查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/mgrRpt",
        "APPLNO": "105",
        "INNERNO": "#1_7_2",
        "FUNCNAME": "客户经理报表查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/flowRpt",
        "APPLNO": "105",
        "INNERNO": "#1_7_3",
        "FUNCNAME": "流程信息报表查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/data",
        "APPLNO": "105",
        "INNERNO": "#1_7_4",
        "FUNCNAME": "驾驶舱",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/data2",
        "APPLNO": "105",
        "INNERNO": "#1_7_5",
        "FUNCNAME": "驾驶舱2",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/housingFund",
        "APPLNO": "105",
        "INNERNO": "#1_7_6",
        "FUNCNAME": "公积金查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/custInfo",
        "APPLNO": "105",
        "INNERNO": "#1_7_7",
        "FUNCDESC": "",
        "FUNCNAME": "客户风险管理",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/integrationMgrRpt",
        "APPLNO": "105",
        "INNERNO": "#1_7_8",
        "FUNCDESC": "",
        "FUNCNAME": "浙里贷客户报表查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "3",
        "FUNCADDRESS": "treport/view/integrationManagerRpt",
        "APPLNO": "105",
        "INNERNO": "#1_7_9",
        "FUNCDESC": "",
        "FUNCNAME": "浙里贷客户经理报表查询",
        "PINNERNO": "#1_7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "imp:imp?RbacCode=105&appcode=umgr&tableid=CASS_USERINFO",
        "APPLNO": "105",
        "INNERNO": "#2",
        "FUNCNAME": "通用导入服务",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/projectAuthList",
        "APPLNO": "105",
        "INNERNO": "#3",
        "FUNCNAME": "预约操作权限管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "order/view/orderProject",
        "APPLNO": "105",
        "INNERNO": "#4",
        "FUNCDESC": "",
        "FUNCNAME": "录单",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "uc:privrole?applno=19726",
        "APPLNO": "105",
        "INNERNO": "#7",
        "FUNCDESC": "",
        "FUNCNAME": "柜员角色管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "crosseb/view/auth/check",
        "APPLNO": "105",
        "INNERNO": "#8",
        "FUNCDESC": "",
        "FUNCNAME": "申请审核",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "crosseb/view/auth/queryResult",
        "APPLNO": "105",
        "INNERNO": "#9",
        "FUNCDESC": "",
        "FUNCNAME": "审核结果查询",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "10001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/recordList",
        "APPLNO": "105",
        "INNERNO": "11",
        "FUNCNAME": "预约查询",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "10002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/branchList",
        "APPLNO": "105",
        "INNERNO": "12",
        "FUNCNAME": "网点管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "10003",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/statistic",
        "APPLNO": "105",
        "INNERNO": "13",
        "FUNCNAME": "预约统计",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "10004",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/blackList",
        "APPLNO": "105",
        "INNERNO": "14",
        "FUNCNAME": "黑名单管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "10005",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/branchInfoList",
        "APPLNO": "105",
        "INNERNO": "15",
        "FUNCNAME": "网点信息管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "20001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/projectAdd",
        "APPLNO": "105",
        "INNERNO": "21",
        "FUNCNAME": "项目新增",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "20002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "booking/view/projectList",
        "APPLNO": "105",
        "INNERNO": "22",
        "FUNCNAME": "项目查询",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "30001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/newsList",
        "APPLNO": "105",
        "INNERNO": "31",
        "FUNCNAME": "热点新闻管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "30002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/videoList",
        "APPLNO": "105",
        "INNERNO": "32",
        "FUNCNAME": "展示视频管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "30003",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/staffList",
        "APPLNO": "105",
        "INNERNO": "33",
        "FUNCNAME": "明星员工管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "30004",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/aroundList",
        "APPLNO": "105",
        "INNERNO": "34",
        "FUNCNAME": "周边信息管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "30005",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/productList",
        "APPLNO": "105",
        "INNERNO": "35",
        "FUNCNAME": "热门产品管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "30006",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/templateList",
        "APPLNO": "105",
        "INNERNO": "36",
        "FUNCNAME": "展示配置管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "intel/view/netTemplateList",
        "APPLNO": "105",
        "INNERNO": "41",
        "FUNCNAME": "智慧屏模版管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "intel/view/baseProductList",
        "APPLNO": "105",
        "INNERNO": "42",
        "FUNCNAME": "基础产品管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40003",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "intel/view/netNoticeList",
        "APPLNO": "105",
        "INNERNO": "43",
        "FUNCNAME": "网点公告管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40004",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "intel/view/netInfoList",
        "APPLNO": "105",
        "INNERNO": "44",
        "FUNCNAME": "网点介绍管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40005",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "intel/view/managerList",
        "APPLNO": "105",
        "INNERNO": "45",
        "FUNCNAME": "网点明星经理管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40006",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "screen/view/videoList",
        "APPLNO": "105",
        "INNERNO": "46",
        "FUNCNAME": "展示资源管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "40007",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "intel/view/hotProduct",
        "APPLNO": "105",
        "INNERNO": "47",
        "FUNCNAME": "热门产品管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "50001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "olloan/view/instList",
        "APPLNO": "105",
        "INNERNO": "51",
        "FUNCNAME": "机构管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "50002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "olloan/view/managerList",
        "APPLNO": "105",
        "INNERNO": "52",
        "FUNCNAME": "人员管理",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "50003",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "53",
        "FUNCNAME": "统计台账",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "53A1",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "olloan/view/report1",
        "APPLNO": "105",
        "INNERNO": "53A",
        "FUNCNAME": "营销情况展示",
        "PINNERNO": "53",
        "LEAF": "1"
      },
      {
        "FUNCNO": "53B1",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "olloan/view/report2",
        "APPLNO": "105",
        "INNERNO": "53B",
        "FUNCNAME": "营销清单展示",
        "PINNERNO": "53",
        "LEAF": "1"
      },
      {
        "FUNCNO": "53C1",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "olloan/view/report3",
        "APPLNO": "105",
        "INNERNO": "53C",
        "FUNCNAME": "营销排名展示",
        "PINNERNO": "53",
        "LEAF": "1"
      },
      {
        "FUNCNO": "53D1",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "olloan/view/report4",
        "APPLNO": "105",
        "INNERNO": "53D",
        "FUNCNAME": "营销机构/渠道获客清单展示",
        "PINNERNO": "53",
        "LEAF": "1"
      },
      {
        "FUNCNO": "50004",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "olloan/view/QRCode",
        "APPLNO": "105",
        "INNERNO": "54",
        "FUNCNAME": "营销二维码",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A1000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "A1",
        "FUNCNAME": "功能开通",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "A1001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/whiteList/add",
        "APPLNO": "105",
        "INNERNO": "A11",
        "FUNCNAME": "添加名单经办",
        "PINNERNO": "A1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A1002",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/whiteList/check",
        "APPLNO": "105",
        "INNERNO": "A12",
        "FUNCNAME": "添加名单复核",
        "PINNERNO": "A1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A1003",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/store/check",
        "APPLNO": "105",
        "INNERNO": "A13",
        "FUNCNAME": "店铺审核",
        "PINNERNO": "A1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A1004",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/spread/set",
        "APPLNO": "105",
        "INNERNO": "A14",
        "FUNCNAME": "优惠点差设置",
        "PINNERNO": "A1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A1005",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/spread/query",
        "APPLNO": "105",
        "INNERNO": "A15",
        "FUNCNAME": "指令明细查询",
        "PINNERNO": "A1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A2000",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "crosseb/view/agrmnt/close",
        "APPLNO": "105",
        "INNERNO": "A2",
        "FUNCNAME": "功能关闭",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A3000",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "crosseb/view/agrmnt/recovery",
        "APPLNO": "105",
        "INNERNO": "A3",
        "FUNCNAME": "功能恢复",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A4000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "A4",
        "FUNCNAME": "柜员额度维护",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "A4001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/limit/increase",
        "APPLNO": "105",
        "INNERNO": "A41",
        "FUNCNAME": "额度调增",
        "PINNERNO": "A4",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A4002",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/limit/decrease",
        "APPLNO": "105",
        "INNERNO": "A42",
        "FUNCNAME": "额度扣减",
        "PINNERNO": "A4",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A5000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "A5",
        "FUNCNAME": "银行检查订单",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "A5001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/check/random",
        "APPLNO": "105",
        "INNERNO": "A51",
        "FUNCNAME": "随机检查",
        "PINNERNO": "A5",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A5002",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/check/designate",
        "APPLNO": "105",
        "INNERNO": "A52",
        "FUNCNAME": "指定检查",
        "PINNERNO": "A5",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A5003",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/check/detail",
        "APPLNO": "105",
        "INNERNO": "A53",
        "FUNCNAME": "检查明细查询处理",
        "PINNERNO": "A5",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A6000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "A6",
        "FUNCNAME": "报表统计",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "A6001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/statistics/agrmnt",
        "APPLNO": "105",
        "INNERNO": "A61",
        "FUNCNAME": "签约客户明细表",
        "PINNERNO": "A6",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A6002",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/statistics/store",
        "APPLNO": "105",
        "INNERNO": "A62",
        "FUNCNAME": "客户店铺情况表",
        "PINNERNO": "A6",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A6003",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/statistics/order",
        "APPLNO": "105",
        "INNERNO": "A63",
        "FUNCNAME": "订单明细表",
        "PINNERNO": "A6",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A6004",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/statistics/lmtHistory",
        "APPLNO": "105",
        "INNERNO": "A64",
        "FUNCNAME": "额度使用情况明细表",
        "PINNERNO": "A6",
        "LEAF": "1"
      },
      {
        "FUNCNO": "功能代码",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/statistics/orderFile",
        "APPLNO": "105",
        "INNERNO": "A65",
        "FUNCNAME": "订单文件上传明细表",
        "PINNERNO": "A6",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "A7",
        "FUNCNAME": "参数管理功能",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "A7001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/validday",
        "APPLNO": "105",
        "INNERNO": "A71",
        "FUNCNAME": "订单有效天数设置",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7002",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/checkrate",
        "APPLNO": "105",
        "INNERNO": "A72",
        "FUNCNAME": "抽检比率设置",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7003",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/platform",
        "APPLNO": "105",
        "INNERNO": "A73",
        "FUNCNAME": "平台设置",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7004",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/orderParam",
        "APPLNO": "105",
        "INNERNO": "A74",
        "FUNCNAME": "平台订单格式维护",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7005",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/currency",
        "APPLNO": "105",
        "INNERNO": "A75",
        "FUNCNAME": "平台币种转换字典",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7006",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/country",
        "APPLNO": "105",
        "INNERNO": "A76",
        "FUNCNAME": "平台国别转换字典",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A7008",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/param/exchangeRate",
        "APPLNO": "105",
        "INNERNO": "A78",
        "FUNCNAME": "应急汇率添加",
        "PINNERNO": "A7",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A8000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "A8",
        "FUNCNAME": "异常处理",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "A8001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/exceptionHandle/orderFile",
        "APPLNO": "105",
        "INNERNO": "A81",
        "FUNCNAME": "订单文件上传异常处理",
        "PINNERNO": "A8",
        "LEAF": "1"
      },
      {
        "FUNCNO": "A8002",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "crosseb/view/exceptionHandle/limitUnlock",
        "APPLNO": "105",
        "INNERNO": "A82",
        "FUNCNAME": "额度解锁",
        "PINNERNO": "A8",
        "LEAF": "1"
      },
      {
        "FUNCNO": "B1000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "B1",
        "FUNCNAME": "交易明细查询",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "B1001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "lbs/view/debitCardQuery",
        "APPLNO": "105",
        "INNERNO": "B11",
        "FUNCNAME": "借记卡",
        "PINNERNO": "B1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "B1001",
        "FUNCLEVEL": "2",
        "FUNCADDRESS": "lbs/view/creditCardQuery",
        "APPLNO": "105",
        "INNERNO": "B12",
        "FUNCNAME": "信用卡",
        "PINNERNO": "B1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "N0001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "olloan/ydzQuery",
        "APPLNO": "105",
        "INNERNO": "N1",
        "FUNCNAME": "优待证申请明细",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG1000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "UMSG1",
        "FUNCNAME": "自动回复配置",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "UMSG1001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/reply/ReplyConf",
        "APPLNO": "105",
        "INNERNO": "UMSG11",
        "FUNCNAME": "接收配置",
        "PINNERNO": "UMSG1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG1002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/reply/ReplyInf",
        "APPLNO": "105",
        "INNERNO": "UMSG12",
        "FUNCNAME": "发送模板配置",
        "PINNERNO": "UMSG1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG1003",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/reply/ReplyReceiver",
        "APPLNO": "105",
        "INNERNO": "UMSG13",
        "FUNCNAME": "接收账号配置",
        "PINNERNO": "UMSG1",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG2000",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/typeInfo/MsgTypeInfo",
        "APPLNO": "105",
        "INNERNO": "UMSG2",
        "FUNCNAME": "消息服务配置",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG3000",
        "FUNCLEVEL": "1",
        "APPLNO": "105",
        "INNERNO": "UMSG3",
        "FUNCNAME": "消息任务管理",
        "PINNERNO": "0",
        "LEAF": "0"
      },
      {
        "FUNCNO": "UMSG3001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/task/MsgTask",
        "APPLNO": "105",
        "INNERNO": "UMSG31",
        "FUNCNAME": "任务配置",
        "PINNERNO": "UMSG3",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG3001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/task/MsgSubTask",
        "APPLNO": "105",
        "INNERNO": "UMSG32",
        "FUNCNAME": "子任务配置",
        "PINNERNO": "UMSG3",
        "LEAF": "1"
      },
      {
        "FUNCNO": "UMSG3001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "umsg/view/task/MsgReceivers",
        "APPLNO": "105",
        "INNERNO": "UMSG33",
        "FUNCNAME": "接收者配置",
        "PINNERNO": "UMSG3",
        "LEAF": "1"
      },
      {
        "FUNCNO": "V0001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "ydz/view/ydzList",
        "APPLNO": "105",
        "INNERNO": "V1",
        "FUNCNAME": "证件照审核",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "V0002",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "ydz/view/ydzBatchCkeck",
        "APPLNO": "105",
        "INNERNO": "V2",
        "FUNCNAME": "批量审核",
        "PINNERNO": "0",
        "LEAF": "1"
      },
      {
        "FUNCNO": "W0001",
        "FUNCLEVEL": "1",
        "FUNCADDRESS": "bireport/view/biList",
        "APPLNO": "105",
        "INNERNO": "W1",
        "FUNCNAME": "BI平台报表验证",
        "PINNERNO": "0",
        "LEAF": "1"
      }
    ]
  }
}
const roleMock = {
  "aamBankflag": "1",
  "105": {
    "appCode": "105",
    "appName": "外币现钞预约取现",
    "currRole": "1",
    "loaded": true,
    "userAppRoleList": [{
      "appCode": "105",
      "funcs": ["#1", "#1_1", "#1_10", "#1_10_1", "#1_10_2", "#1_11", "#1_11_1", "#1_11_2", "#1_12", "#1_12_1", "#1_12_2", "#1_12_3", "#1_13", "#1_14", "#1_16", "#1_2", "#1_6", "#1_7", "#1_7_1", "#1_7_10", "#1_7_2", "#1_7_3", "#1_7_4", "#1_7_5", "#1_7_7", "#1_7_8", "#1_7_9"],
      "roleName": "个贷操作岗",
      "roleNo": "1"
    }, {
      "appCode": "105",
      "funcs": ["#3", "11", "12", "13", "14"],
      "roleName": "预约管理员",
      "roleNo": "10001"
    }, {
      "appCode": "105",
      "funcs": ["21", "22"],
      "roleName": "项目管理员",
      "roleNo": "10002"
    }, {
      "appCode": "105",
      "funcs": ["31", "32", "33", "34", "35", "36"],
      "roleName": "网点大屏管理员",
      "roleNo": "10003"
    }, {
      "appCode": "105",
      "funcs": ["41", "42", "43", "44", "45", "46", "47"],
      "roleName": "网点智慧屏管理",
      "roleNo": "10004"
    }, {
      "appCode": "105",
      "funcs": ["#1", "#1_1", "#1_2", "12", "15", "51", "53", "53A", "53B", "53C", "53D", "54", "A6", "A61", "A62", "A63", "A64", "A65"],
      "roleName": "网点管理员",
      "roleNo": "10005"
    }, {
      "appCode": "105",
      "funcs": ["11", "12", "13", "14", "15", "21", "22", "31", "32", "33", "34", "35", "36", "41", "42", "43", "44", "45", "46", "47", "51", "52", "53", "53A", "53B", "53C", "53D", "54", "A1", "A11", "A12", "A13", "A14", "A15", "A2", "A3", "A4", "A41", "A42", "A5", "A51", "A52", "A53", "A6", "A61", "A62", "A63", "A64", "A65", "A7", "A71", "A72", "A73", "A74", "A75", "A76", "A78", "A8", "A81", "A82", "B11", "B12", "N1", "UMSG1", "UMSG11", "UMSG12", "UMSG13", "UMSG2", "UMSG3", "UMSG31", "UMSG32", "UMSG33", "V1", "V2"],
      "roleName": "落地工单工作员",
      "roleNo": "10012"
    }, {
      "appCode": "105",
      "funcs": ["#1", "#1_1", "#1_10", "#1_10_1", "#1_10_2", "#1_11", "#1_11_1", "#1_11_2", "#1_12", "#1_12_1", "#1_12_2", "#1_12_3", "#1_13", "#1_14", "#1_2", "#1_6", "#1_7", "#1_7_1", "#1_7_2", "#1_7_3", "#1_7_4", "#1_7_5", "#1_7_6", "#1_7_7"],
      "roleName": "个贷管理岗",
      "roleNo": "2"
    }, {
      "appCode": "105",
      "funcs": ["#11", "#13", "#4"],
      "roleName": "录单操作员",
      "roleNo": "3"
    }, {
      "appCode": "105",
      "funcs": ["#10", "#7"],
      "roleName": "角色分配员",
      "roleNo": "4"
    }, {
      "appCode": "105",
      "funcs": ["#12"],
      "roleName": "录单管理员",
      "roleNo": "5"
    }, {
      "appCode": "105",
      "funcs": ["#14"],
      "roleName": "录单修改员",
      "roleNo": "6"
    }]
  },
}
const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_MENU_DATA: (state, menuList) => {
    state.menuList = menuList
  },
  SET_ALL_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_ALL_ROLES', roleMock['105'].userAppRoleList)
      commit('SET_MENU_DATA', menuMock.response.function)
      resolve({ roles: roleMock['105'].userAppRoleList[0]})
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

