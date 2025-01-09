
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: [{
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
    }],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
