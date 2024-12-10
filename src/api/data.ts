const response={
    "code": 20000,
    "data": [
        {
            "childrenList": [
                {
                    "childrenList": [],
                    "createTime": "2024-12-03T07:26:04.043+00:00",
                    "creator": "83a2ee264ba546ff82f552edff217bf4",
                    "hasChildren": false,
                    "id": "3671c1af53d540b88f4104c49ffe71ce",
                    "isFullPermission": 1,
                    "lastModifyTime": null,
                    "lastModifyUser": null,
                    "libraryId": "5e6a6b20937f4db991203b369c9d9686",
                    "name": "test",
                    "parentId": "07e09902fcb64b8e8cad7097a9ff5051",
                    "parentPath": "5e6a6b20937f4db991203b369c9d9686;07e09902fcb64b8e8cad7097a9ff5051;",
                    "selfCtcCount": 3,
                    "selfLtcCount": 3,
                    "testcaseList": [
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。运行3秒后，驾驶员限制ABS功能, AEBS功能进入抑制状态后，驾驶员恢复ABS运作。",
                                "folderId": "3671c1af53d540b88f4104c49ffe71ce",
                                "hasDeleted": null,
                                "id": "21a6430f0a7d4eb5baeae9a812a4a8f8",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能由AEBS1_SysStat = 0x1: System Is Temporarily Not Available切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                        "id": "428d1d3234e74da1b645ec1c5767ed68",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 给入信号EBC1_ABSFullyOperational = 0x03. 进入抑制状态后给入信号EBC1_ABSFullyOperational = 0x14. 仿真30秒",
                                        "testcaseId": "21a6430f0a7d4eb5baeae9a812a4a8f8"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "21a6430f0a7d4eb5baeae9a812a4a8f8",
                                "testcaseName": "Inhibit_to_Standby_T3_ABSFullyOperational",
                                "testcaseNumber": "AEBS_000_009",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。运行3秒后，驾驶员主动接管制动, AEBS功能进入抑制状态后驾驶员停止接管制动。",
                                "folderId": "3671c1af53d540b88f4104c49ffe71ce",
                                "hasDeleted": null,
                                "id": "e01844c7aa9343b499ecf659bad5593b",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能由AEBS1_SysStat =0x4:driver overrides system驾驶员接管切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                        "id": "c36d6a78590942558b585612ff9df671",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 激活信号CCVS1_ParkingBrakeSwitch==0x013. 进入抑制状态后，给入信号CCVS1_ParkingBrakeSwitch==0x004. 仿真30秒",
                                        "testcaseId": "e01844c7aa9343b499ecf659bad5593b"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "e01844c7aa9343b499ecf659bad5593b",
                                "testcaseName": "Inhibit_to_Standby_T3_ParkingBrakeSwitch",
                                "testcaseNumber": "AEBS_000_007",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同车道以67km/h沿中心线行驶的动态目标。运行3秒后，驾驶员激活ABS信号, 距离动态目标120米时，驾驶员抑制ABS信号。",
                                "folderId": "3671c1af53d540b88f4104c49ffe71ce",
                                "hasDeleted": null,
                                "id": "ed9d0402b9ce4daaa8c807d88a8caa03",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能由AEBS1_SysStat = 0x1: System Is Temporarily Not Available切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                        "id": "e74bfab0ed7d46d19f1bfbfb395317df",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 激活信号EBC1_ ABSActive==0x013. 继续运行仿真，距离120米时，抑制信号EBC1_ ABSActive==0x004. 仿真30秒",
                                        "testcaseId": "ed9d0402b9ce4daaa8c807d88a8caa03"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "ed9d0402b9ce4daaa8c807d88a8caa03",
                                "testcaseName": "Inhibit_to_Standby_T3_ABSDeactive",
                                "testcaseNumber": "AEBS_000_008",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        }
                    ],
                    "type": "testcase_project"
                },
                {
                    "childrenList": [],
                    "createTime": "2024-12-03T07:26:04.108+00:00",
                    "creator": "83a2ee264ba546ff82f552edff217bf4",
                    "hasChildren": false,
                    "id": "66ec6c7d4b954fc3b31343a8d5f5ecb0",
                    "isFullPermission": 1,
                    "lastModifyTime": null,
                    "lastModifyUser": null,
                    "libraryId": "5e6a6b20937f4db991203b369c9d9686",
                    "name": "test1",
                    "parentId": "07e09902fcb64b8e8cad7097a9ff5051",
                    "parentPath": "5e6a6b20937f4db991203b369c9d9686;07e09902fcb64b8e8cad7097a9ff5051;",
                    "selfCtcCount": 4,
                    "selfLtcCount": 4,
                    "testcaseList": [
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的静止目标。主车至少行驶3秒后，主车距离静止目标200米时，静止目标车辆起步，向左变道。",
                                "folderId": "66ec6c7d4b954fc3b31343a8d5f5ecb0",
                                "hasDeleted": null,
                                "id": "186f836735e743238234ca78ca1618cf",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = 0x3:system is ready (no warning and no braking active)准备好",
                                        "id": "dcdd5fab82f04da9bddf653f4e851bb3",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 仿真30秒",
                                        "testcaseId": "186f836735e743238234ca78ca1618cf"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "186f836735e743238234ca78ca1618cf",
                                "testcaseName": "Standby_to_Inhibit_T4_NoPossibilityOfCollision",
                                "testcaseNumber": "AEBS_000_013",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。",
                                "folderId": "66ec6c7d4b954fc3b31343a8d5f5ecb0",
                                "hasDeleted": null,
                                "id": "18e1f61c110647b2b2c5afbd83292d74",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能由AEBS1_SysStat=信号未知切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                        "id": "1c50137252424f358247c9f7f09dab54",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 给入信号AEBS功能降级：具体信号未知3. 继续运行仿真，距离120米时，给入信号AEBS功能等级恢复：具体信号未知3. 仿真30秒",
                                        "testcaseId": "18e1f61c110647b2b2c5afbd83292d74"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "18e1f61c110647b2b2c5afbd83292d74",
                                "testcaseName": "Inhibit_to_Standby_T3_DTC",
                                "testcaseNumber": "AEBS_000_012",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶，接近同样位于车道中心的以67km/h恒速行驶的动态目标。行驶3秒后，主车距离动态目标120米时，主车以5m/s2的纵向减速度减速至10km/h。",
                                "folderId": "66ec6c7d4b954fc3b31343a8d5f5ecb0",
                                "hasDeleted": null,
                                "id": "5c13f1549d554360a9a0837ecde47df4",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "fd4080890eaa47b0a8de3af4af6e8063",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 仿真30秒",
                                        "testcaseId": "5c13f1549d554360a9a0837ecde47df4"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "5c13f1549d554360a9a0837ecde47df4",
                                "testcaseName": "Standby_to_Inhibit_T4_OutOfSpeedLimit",
                                "testcaseNumber": "AEBS_000_014",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。运行3秒后，驾驶员限制XBR功能, AEBS功能进入抑制状态后，驾驶员恢复XBR运作。",
                                "folderId": "66ec6c7d4b954fc3b31343a8d5f5ecb0",
                                "hasDeleted": null,
                                "id": "68a93a265491431b96e6133d164562da",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能由AEBS1_SysStat = 0x1: System Is Temporarily Not Available切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                        "id": "9517454fa44d4cda94f9eb99ca14aac4",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2.给入信号XBR系统故障：EBC5_XBRSystemState == 0x23. 进入抑制状态后，给入信号使得XBR恢复：EBC5_XBRSystemState == 0x14. 仿真30秒",
                                        "testcaseId": "68a93a265491431b96e6133d164562da"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "68a93a265491431b96e6133d164562da",
                                "testcaseName": "Inhibit_to_Standby_T3_XBROperational",
                                "testcaseNumber": "AEBS_000_011",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        }
                    ],
                    "type": "testcase_project"
                },
                {
                    "childrenList": [],
                    "createTime": "2024-12-03T07:26:04.189+00:00",
                    "creator": "83a2ee264ba546ff82f552edff217bf4",
                    "hasChildren": false,
                    "id": "33d2aea75a91430d8a16b22bf0296f9a",
                    "isFullPermission": 1,
                    "lastModifyTime": null,
                    "lastModifyUser": null,
                    "libraryId": "5e6a6b20937f4db991203b369c9d9686",
                    "name": "test2",
                    "parentId": "07e09902fcb64b8e8cad7097a9ff5051",
                    "parentPath": "5e6a6b20937f4db991203b369c9d9686;07e09902fcb64b8e8cad7097a9ff5051;",
                    "selfCtcCount": 17,
                    "selfLtcCount": 17,
                    "testcaseList": [
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，目标车以5m/s2的纵向加速度且逐渐加速到100km/h后，以恒定速度行驶",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "2c2cbf4a33ac452c9f6fd02e46a57fc9",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "解除PreWarn后，AEBS功能切换至待机状态\nAEBS1_SysStat = 0x3:system is ready (no warning and no braking active)",
                                        "id": "b64cc6c892a64f659215251f73a400ca",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 仿真40秒",
                                        "testcaseId": "2c2cbf4a33ac452c9f6fd02e46a57fc9"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "2c2cbf4a33ac452c9f6fd02e46a57fc9",
                                "testcaseName": "Activate_to_Standby_T6_2",
                                "testcaseNumber": "AEBS_000_025",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，主车主动向左变道绕行，主车运动轨迹和目标运动轨迹不再存在碰撞点。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "36fdd437c9eb42fe9a87af36c30a50f6",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态： \nAEBS1_SysStat = 0x3:system is ready (no warning and no braking active)准备好",
                                        "id": "bfb05d13085d462b91142d38b767edd8",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后，主车主动向左变道3. 仿真40秒",
                                        "testcaseId": "36fdd437c9eb42fe9a87af36c30a50f6"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "36fdd437c9eb42fe9a87af36c30a50f6",
                                "testcaseName": "Activate_to_Inhibit_T7_NoPossibilityOfCollision",
                                "testcaseNumber": "AEBS_000_026",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶，接近同样位于车道中心的以60km/h恒速行驶的动态目标，目标车在主车前方80m处。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "5233e3eec61d48f99a75bd5b42797c51",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "信号AEBS1_SysStat切换至如下任一状态：\n0x5:collision warning active (not affecting vehicle dynamics)一级\n0x6:collision warning with braking (e.g. brake jerk or partial braking)二级\n0x7:emergency braking active",
                                        "id": "ebf8d8072eeb41c4b3c2fa275797f12d",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 仿真30秒",
                                        "testcaseId": "5233e3eec61d48f99a75bd5b42797c51"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "5233e3eec61d48f99a75bd5b42797c51",
                                "testcaseName": "Standby_to_Activate_T5_PossibilityOfCollision",
                                "testcaseNumber": "AEBS_000_023",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，驾驶员主动接管油门。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "5c9f6fc76ecd49b5af77e019aee163a0",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态： \nAEBS1_SysStat = 0x4:driver overrides system驾驶员接管",
                                        "id": "e452ccdb430e4819b4e2c1ee0f73973e",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后， 给入信号 EEC2_AcceleratorPedalPosition = 90% 和AcceleratorPedalPosition Rate = 220%3.仿真40秒",
                                        "testcaseId": "5c9f6fc76ecd49b5af77e019aee163a0"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "5c9f6fc76ecd49b5af77e019aee163a0",
                                "testcaseName": "Activate_to_Inhibit_T7_PedalPosition",
                                "testcaseNumber": "AEBS_000_028",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，驾驶员主动接管制动。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "759789aa6c2e41e18f813af4ceb83c3a",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态： \nAEBS1_SysStat = 0x4:driver overrides system驾驶员接管",
                                        "id": "20ec7e7c51bc4fe19f4e4b595b3029a1",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后激活信号 CCVS1_ParkingBrakeSwitch==0x013.仿真40秒",
                                        "testcaseId": "759789aa6c2e41e18f813af4ceb83c3a"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "759789aa6c2e41e18f813af4ceb83c3a",
                                "testcaseName": "Activate_to_Inhibit_T7_ParkingBrakeSwitch",
                                "testcaseNumber": "AEBS_000_030",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:05.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，VDC功能仅部分运行。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "82c3e006247047be845dd8fecf05a6d9",
                                "modifyTime": "2024-12-03T07:26:05.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态 ：\nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "1a66b1f1a51841fcb8f9d93a25e1e691",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后发送抑制信号VDC1_VDCFullyOperational = 0x03. 仿真40秒",
                                        "testcaseId": "82c3e006247047be845dd8fecf05a6d9"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "82c3e006247047be845dd8fecf05a6d9",
                                "testcaseName": "Activate_to_Inhibit_T7_VDCFailure",
                                "testcaseNumber": "AEBS_000_033",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，驾驶员主动接管制动。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "8dafa1c1e8694108940a077dfe0c6f60",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态： \nAEBS1_SysStat =0x4:driver overrides system驾驶员接管",
                                        "id": "7feccf98cf194ebfbaf48f4313deaf36",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后，激活信号 CCVS1_BrakeSwitch==0x013.仿真40秒",
                                        "testcaseId": "8dafa1c1e8694108940a077dfe0c6f60"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "8dafa1c1e8694108940a077dfe0c6f60",
                                "testcaseName": "Activate_to_Inhibit_T7_BrakeSwitch",
                                "testcaseNumber": "AEBS_000_029",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，，驾驶员主动接管制动。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "95ba966bb418486d8dac94d918903b10",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat =0x4:driver overrides system驾驶员接管",
                                        "id": "5232c8888a984f01987139795ea4b90f",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 驾驶员接管制动 CCVS1_ParkingBrakeSwitch==0x013. 仿真30秒",
                                        "testcaseId": "95ba966bb418486d8dac94d918903b10"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "95ba966bb418486d8dac94d918903b10",
                                "testcaseName": "Standby_to_Inhibit_T4_ParkingBrakeSwitch",
                                "testcaseNumber": "AEBS_000_017",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，驾驶员给入XBR系统故障信号。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "afc5757187f04469a53e8c649f7045fa",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "5ab3f86df3654cc2990976312ad1557d",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. XBR系统故障：EBC5_XBRSystemState == 0x23. 仿真30秒",
                                        "testcaseId": "afc5757187f04469a53e8c649f7045fa"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "afc5757187f04469a53e8c649f7045fa",
                                "testcaseName": "Standby_to_Inhibit_T4_XBSFailure",
                                "testcaseNumber": "AEBS_000_021",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，主车主动减速至12km/h。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "b277dc5a3a1345c3a39906494853fcc4",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态 ：AEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "cea9615c96b44832a35bc9dab24aa7e3",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后，主车减速至12km/h，给入信号值 EBC2_ MeanFrontAxleSpeed =12km/h3. 仿真40秒",
                                        "testcaseId": "b277dc5a3a1345c3a39906494853fcc4"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "b277dc5a3a1345c3a39906494853fcc4",
                                "testcaseName": "Activate_to_Inhibit_T7_OutOfSpeedLimit",
                                "testcaseNumber": "AEBS_000_027",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，驾驶员主动接管制动。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "b56686fade764f42b6cb4703042c5f42",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = 0x4:driver overrides system驾驶员接管",
                                        "id": "7fd90918a2054ab6891141b0a8906d82",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 驾驶员制动CCVS1_BrakeSwitch==0x013. 仿真30秒",
                                        "testcaseId": "b56686fade764f42b6cb4703042c5f42"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "b56686fade764f42b6cb4703042c5f42",
                                "testcaseName": "Standby_to_Inhibit_T4_BrakeSwitch",
                                "testcaseNumber": "AEBS_000_016",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，ABS信号激活。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "bd55a443fc5f4c9dab3780ec3f0c2355",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态 ：\nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "94b6696f6d7c494a8fedb67620b5b8a4",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后，激活信号EBC1_ ABSActive==0x013. 仿真40秒",
                                        "testcaseId": "bd55a443fc5f4c9dab3780ec3f0c2355"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "bd55a443fc5f4c9dab3780ec3f0c2355",
                                "testcaseName": "Activate_to_Inhibit_T7_ABSActive",
                                "testcaseNumber": "AEBS_000_031",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:05.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同样位于车道中心的距离距离80米的动态目标车，目标车速度60km/h。PreWarn激活后，ABS功能仅部分运行。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "db157e25fefd4795bfe67079cbbf17ae",
                                "modifyTime": "2024-12-03T07:26:05.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能从激活状态：AEBS1_SysStat = 0x5:collision warning active (not affecting vehicle dynamics)\n切换至抑制状态 ：\nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "8c94ecc56b5f4aef99b7ff067246e9be",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 报警后，发送抑制信号EBC1_ABSFullyOperational = 0x03. 仿真40秒",
                                        "testcaseId": "db157e25fefd4795bfe67079cbbf17ae"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "db157e25fefd4795bfe67079cbbf17ae",
                                "testcaseName": "Activate_to_Inhibit_T7_ABSFailure",
                                "testcaseNumber": "AEBS_000_032",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，驾驶员给入ABS功能抑制信号。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "e60781c254ee408db808fdba4681b7a3",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "a2c551ec5a5443309a8a979cc1977ad4",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. ABS功能not fully operational：EBC1_ABSFullyOperational = 0x03. 仿真30秒",
                                        "testcaseId": "e60781c254ee408db808fdba4681b7a3"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "e60781c254ee408db808fdba4681b7a3",
                                "testcaseName": "Standby_to_Inhibit_T4_ABSFailure",
                                "testcaseNumber": "AEBS_000_019",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，驾驶员给入AEBS功能降级信号。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "e692dfc018844b42a4275a6c6f8e2c6a",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = ",
                                        "id": "f16b3e19207a4a99b9f840d121ae09e5",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 给入信号AEBS功能降级：具体信号未知3. 仿真30秒",
                                        "testcaseId": "e692dfc018844b42a4275a6c6f8e2c6a"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "e692dfc018844b42a4275a6c6f8e2c6a",
                                "testcaseName": "Standby_to_Inhibit_T4_DTC",
                                "testcaseNumber": "AEBS_000_022",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，驾驶员给入VDC功能抑制信号。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "e7b672ef5f914c03ac7a03f1e95df8ea",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat =0x1: System Is Temporarily Not Available",
                                        "id": "92cbf97101234de6a5c8f2ae99a2e6dc",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. VDC功能not fully operational：VDC1_VDCFullyOperational = 0x03. 仿真30秒",
                                        "testcaseId": "e7b672ef5f914c03ac7a03f1e95df8ea"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "e7b672ef5f914c03ac7a03f1e95df8ea",
                                "testcaseName": "Standby_to_Inhibit_T4_VDCFailure",
                                "testcaseNumber": "AEBS_000_020",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        },
                        {
                            "testcaseInfo": {
                                "choosedCtcNum": null,
                                "createTime": "2024-12-03T07:26:04.000+00:00",
                                "createUser": "83a2ee264ba546ff82f552edff217bf4",
                                "createUserDelete": null,
                                "createUserName": "许琳麒",
                                "ctcs": [],
                                "customFieldData": null,
                                "customValue": null,
                                "description": "在平直道路上，主车以80km/h车道中心线行驶。匀速行驶3秒后，驾驶员激活ABS信号。",
                                "folderId": "33d2aea75a91430d8a16b22bf0296f9a",
                                "hasDeleted": null,
                                "id": "f0e52fb4031a4885b13dbebb1084084a",
                                "modifyTime": "2024-12-03T07:26:04.000+00:00",
                                "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                                "modifyUserName": "许琳麒",
                                "preConditionDesc": "域控上电连接VTD，加载动态场景",
                                "priority": "中",
                                "prop": null,
                                "requireNumberAndId": null,
                                "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                                "rootId": "5e6a6b20937f4db991203b369c9d9686",
                                "steps": [
                                    {
                                        "expectResult": "AEBS功能切换至抑制状态 \nAEBS1_SysStat = 0x1: System Is Temporarily Not Available",
                                        "id": "4cfbae5189e4457e83df766e01d7fc88",
                                        "orderNum": 1,
                                        "stepId": null,
                                        "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 激活ABS信号EBC1_ ABSActive==0x013. 仿真30秒",
                                        "testcaseId": "f0e52fb4031a4885b13dbebb1084084a"
                                    }
                                ],
                                "tags": "状态机",
                                "templateType": "测试文本",
                                "testType": "自动&手动测试",
                                "testcaseId": "f0e52fb4031a4885b13dbebb1084084a",
                                "testcaseName": "Standby_to_Inhibit_T4_ABSActive",
                                "testcaseNumber": "AEBS_000_018",
                                "testcaseTestStage": null
                            },
                            "variables": []
                        }
                    ],
                    "type": "testcase_project"
                }
            ],
            "createTime": "2024-12-03T07:26:03.888+00:00",
            "creator": "83a2ee264ba546ff82f552edff217bf4",
            "hasChildren": true,
            "id": "07e09902fcb64b8e8cad7097a9ff5051",
            "isFullPermission": 1,
            "lastModifyTime": null,
            "lastModifyUser": null,
            "libraryId": "5e6a6b20937f4db991203b369c9d9686",
            "name": "供应商AAEBS",
            "parentId": "5e6a6b20937f4db991203b369c9d9686",
            "parentPath": "5e6a6b20937f4db991203b369c9d9686;",
            "selfCtcCount": 6,
            "selfLtcCount": 6,
            "testcaseList": [
                {
                    "testcaseInfo": {
                        "choosedCtcNum": null,
                        "createTime": "2024-12-03T07:26:04.000+00:00",
                        "createUser": "83a2ee264ba546ff82f552edff217bf4",
                        "createUserDelete": null,
                        "createUserName": "许琳麒",
                        "ctcs": [],
                        "customFieldData": null,
                        "customValue": null,
                        "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。",
                        "folderId": "07e09902fcb64b8e8cad7097a9ff5051",
                        "hasDeleted": null,
                        "id": "0ab71c0612a9499bb6ace0067d778448",
                        "modifyTime": "2024-12-03T07:26:04.000+00:00",
                        "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                        "modifyUserName": "许琳麒",
                        "preConditionDesc": "域控上电连接VTD，加载动态场景",
                        "priority": "中",
                        "prop": null,
                        "requireNumberAndId": null,
                        "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                        "rootId": "5e6a6b20937f4db991203b369c9d9686",
                        "steps": [
                            {
                                "expectResult": "AEBS功能切换至开启状态\nAEBS1_SysStat = 0x0: system is not ready (initialization not finished)\n（功能规范里的信号名：AdvancedEmergencyBrakingSysState = 0x3: System Is Ready And Activated）",
                                "id": "9ffe5066eb18420aaf95639d3536c91e",
                                "orderNum": 1,
                                "stepId": null,
                                "testStep": "1. 开启AEBS功能:AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)3. 仿真30秒",
                                "testcaseId": "0ab71c0612a9499bb6ace0067d778448"
                            }
                        ],
                        "tags": "状态机",
                        "templateType": "测试文本",
                        "testType": "自动&手动测试",
                        "testcaseId": "0ab71c0612a9499bb6ace0067d778448",
                        "testcaseName": "Off_to_On_T1",
                        "testcaseNumber": "AEBS_000_001",
                        "testcaseTestStage": null
                    },
                    "variables": []
                },
                {
                    "testcaseInfo": {
                        "choosedCtcNum": null,
                        "createTime": "2024-12-03T07:26:04.000+00:00",
                        "createUser": "83a2ee264ba546ff82f552edff217bf4",
                        "createUserDelete": null,
                        "createUserName": "许琳麒",
                        "ctcs": [],
                        "customFieldData": null,
                        "customValue": null,
                        "description": "在两条同向双条道上，主车以80km/h的恒定车速沿左边车道中心线行驶，目标车辆以67km/h沿右边车道中心线在主车前方行驶，行驶3秒后，两者纵向相距120米时，主车向右变道",
                        "folderId": "07e09902fcb64b8e8cad7097a9ff5051",
                        "hasDeleted": null,
                        "id": "3407950267714d8fb211ecc9db653d38",
                        "modifyTime": "2024-12-03T07:26:04.000+00:00",
                        "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                        "modifyUserName": "许琳麒",
                        "preConditionDesc": "域控上电连接VTD，加载动态场景",
                        "priority": "中",
                        "prop": null,
                        "requireNumberAndId": null,
                        "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                        "rootId": "5e6a6b20937f4db991203b369c9d9686",
                        "steps": [
                            {
                                "expectResult": "完成变道后AEBS功能切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                "id": "ff4b7b7578e749acb164e2368b27d327",
                                "orderNum": 1,
                                "stepId": null,
                                "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2.仿真30秒",
                                "testcaseId": "3407950267714d8fb211ecc9db653d38"
                            }
                        ],
                        "tags": "状态机",
                        "templateType": "测试文本",
                        "testType": "自动&手动测试",
                        "testcaseId": "3407950267714d8fb211ecc9db653d38",
                        "testcaseName": "Inhibit_to_Standby_T3_PossibilityOfCollision",
                        "testcaseNumber": "AEBS_000_003",
                        "testcaseTestStage": null
                    },
                    "variables": []
                },
                {
                    "testcaseInfo": {
                        "choosedCtcNum": null,
                        "createTime": "2024-12-03T07:26:04.000+00:00",
                        "createUser": "83a2ee264ba546ff82f552edff217bf4",
                        "createUserDelete": null,
                        "createUserName": "许琳麒",
                        "ctcs": [],
                        "customFieldData": null,
                        "customValue": null,
                        "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。",
                        "folderId": "07e09902fcb64b8e8cad7097a9ff5051",
                        "hasDeleted": null,
                        "id": "596333a3937b44bf88a5b50663b64c40",
                        "modifyTime": "2024-12-03T07:26:04.000+00:00",
                        "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                        "modifyUserName": "许琳麒",
                        "preConditionDesc": "域控上电连接VTD，加载动态场景",
                        "priority": "中",
                        "prop": null,
                        "requireNumberAndId": null,
                        "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                        "rootId": "5e6a6b20937f4db991203b369c9d9686",
                        "steps": [
                            {
                                "expectResult": "AEBS功能切换至关闭状态\nAEBS1_SysStat = 0x2:system is deactivated by driver",
                                "id": "3984427f4f89401d9c5606f00b2450ba",
                                "orderNum": 1,
                                "stepId": null,
                                "testStep": "1. 开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)1. 5s后，关闭AEBS功能AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)2. 仿真10秒",
                                "testcaseId": "596333a3937b44bf88a5b50663b64c40"
                            }
                        ],
                        "tags": "状态机",
                        "templateType": "测试文本",
                        "testType": "自动&手动测试",
                        "testcaseId": "596333a3937b44bf88a5b50663b64c40",
                        "testcaseName": "On_to_Off_T2",
                        "testcaseNumber": "AEBS_000_002",
                        "testcaseTestStage": null
                    },
                    "variables": []
                },
                {
                    "testcaseInfo": {
                        "choosedCtcNum": null,
                        "createTime": "2024-12-03T07:26:04.000+00:00",
                        "createUser": "83a2ee264ba546ff82f552edff217bf4",
                        "createUserDelete": null,
                        "createUserName": "许琳麒",
                        "ctcs": [],
                        "customFieldData": null,
                        "customValue": null,
                        "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。运行3秒后，驾驶员给入信号EEC2_AcceleratorPedalPosition = 81%&& AcceleratorPedalPosition Rate= 201%/，AEBS功能进入抑制状态后，给入信号EEC2_AcceleratorPedalPosition = 75%&& AcceleratorPedalPosition Rate= 150%/s",
                        "folderId": "07e09902fcb64b8e8cad7097a9ff5051",
                        "hasDeleted": null,
                        "id": "642e82d7eea2420099085646a7c378d4",
                        "modifyTime": "2024-12-03T07:26:04.000+00:00",
                        "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                        "modifyUserName": "许琳麒",
                        "preConditionDesc": "域控上电连接VTD，加载动态场景",
                        "priority": "中",
                        "prop": null,
                        "requireNumberAndId": null,
                        "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                        "rootId": "5e6a6b20937f4db991203b369c9d9686",
                        "steps": [
                            {
                                "expectResult": "AEBS功能由AEBS1_SysStat =0x4:driver overrides system驾驶员接管切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                "id": "7b6d6b8ddb3c44ad8db3b9da1038d5ac",
                                "orderNum": 1,
                                "stepId": null,
                                "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 给入信号EEC2_AcceleratorPedalPosition = 81%&& AcceleratorPedalPosition Rate= 201%/s3. 进入抑制状态后，给入信号EEC2_AcceleratorPedalPosition = 75%&& AcceleratorPedalPosition Rate= 150%/s4. 仿真30秒",
                                "testcaseId": "642e82d7eea2420099085646a7c378d4"
                            }
                        ],
                        "tags": "状态机",
                        "templateType": "测试文本",
                        "testType": "自动&手动测试",
                        "testcaseId": "642e82d7eea2420099085646a7c378d4",
                        "testcaseName": "Inhibit_to_Standby_T3_PedalPosition",
                        "testcaseNumber": "AEBS_000_005",
                        "testcaseTestStage": null
                    },
                    "variables": []
                },
                {
                    "testcaseInfo": {
                        "choosedCtcNum": null,
                        "createTime": "2024-12-03T07:26:04.000+00:00",
                        "createUser": "83a2ee264ba546ff82f552edff217bf4",
                        "createUserDelete": null,
                        "createUserName": "许琳麒",
                        "ctcs": [],
                        "customFieldData": null,
                        "customValue": null,
                        "description": "在平直道路上，主车以12km/h的恒定车速沿车道中心线行驶，接近同车道以67km/h沿中心线行驶的动态目标。行驶3秒后，距离120米时，主车加速至80km/h。",
                        "folderId": "07e09902fcb64b8e8cad7097a9ff5051",
                        "hasDeleted": null,
                        "id": "8371d0043393487697437516a2b62804",
                        "modifyTime": "2024-12-03T07:26:04.000+00:00",
                        "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                        "modifyUserName": "许琳麒",
                        "preConditionDesc": "域控上电连接VTD，加载动态场景",
                        "priority": "中",
                        "prop": null,
                        "requireNumberAndId": null,
                        "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                        "rootId": "5e6a6b20937f4db991203b369c9d9686",
                        "steps": [
                            {
                                "expectResult": "AEBS功能由AEBS1_SysStat = 0x1: System Is Temporarily Not Available\n切换至待机状态AEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                "id": "304a5d1a358d4228b21e92ea9df33e3b",
                                "orderNum": 1,
                                "stepId": null,
                                "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2.仿真30秒",
                                "testcaseId": "8371d0043393487697437516a2b62804"
                            }
                        ],
                        "tags": "状态机",
                        "templateType": "测试文本",
                        "testType": "自动&手动测试",
                        "testcaseId": "8371d0043393487697437516a2b62804",
                        "testcaseName": "Inhibit_to_Standby_T3_WithinSpeedLimit",
                        "testcaseNumber": "AEBS_000_004",
                        "testcaseTestStage": null
                    },
                    "variables": []
                },
                {
                    "testcaseInfo": {
                        "choosedCtcNum": null,
                        "createTime": "2024-12-03T07:26:04.000+00:00",
                        "createUser": "83a2ee264ba546ff82f552edff217bf4",
                        "createUserDelete": null,
                        "createUserName": "许琳麒",
                        "ctcs": [],
                        "customFieldData": null,
                        "customValue": null,
                        "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶，接近同车道以67km/h沿中心线行驶的动态目标。运行3秒后，驾驶员主动接管制动, AEBS功能进入抑制状态后驾驶员停止接管制动。",
                        "folderId": "07e09902fcb64b8e8cad7097a9ff5051",
                        "hasDeleted": null,
                        "id": "f9002a2df0bd47b6b8aa7458ffc3eed6",
                        "modifyTime": "2024-12-03T07:26:04.000+00:00",
                        "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
                        "modifyUserName": "许琳麒",
                        "preConditionDesc": "域控上电连接VTD，加载动态场景",
                        "priority": "中",
                        "prop": null,
                        "requireNumberAndId": null,
                        "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
                        "rootId": "5e6a6b20937f4db991203b369c9d9686",
                        "steps": [
                            {
                                "expectResult": "AEBS功能切换由AEBS1_SysStat = 0x4:driver overrides system驾驶员接管切换至待机状态\nAEBS1_SysStat = 0x3: system is ready (no warning and no braking active)",
                                "id": "3079750f15514cd4b0ff12760b7ac2e8",
                                "orderNum": 1,
                                "stepId": null,
                                "testStep": "1.  开启AEBS功能AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)2. 激活信号CCVS1_BrakeSwitch==0x013. 进入抑制状态后，给入信号CCVS1_BrakeSwitch==0x004. 仿真30秒",
                                "testcaseId": "f9002a2df0bd47b6b8aa7458ffc3eed6"
                            }
                        ],
                        "tags": "状态机",
                        "templateType": "测试文本",
                        "testType": "自动&手动测试",
                        "testcaseId": "f9002a2df0bd47b6b8aa7458ffc3eed6",
                        "testcaseName": "Inhibit_to_Standby_T3_BrakeSwitch",
                        "testcaseNumber": "AEBS_000_006",
                        "testcaseTestStage": null
                    },
                    "variables": []
                }
            ],
            "type": "testcase_project"
        }
    ],
    "msg": "success"
}

export default function getMockData(){
    return response;
}

// const tableCol=['用例编号','用例名称','优先级']

// const {code,data_,mas}=response;
// const data=[{
//     childrenList:[{},{},...],//=======
//     createTime:string,
//     creator:string,
//     hasChildren:true,//========
//     id:"07e09902fcb64b8e8cad7097a9ff5051",//========
//     isFullPermission:number,
//     lastModifyTime:null|string,
//     lastModifyUser:null|string,
//     libraryId:string,
//     name:"供应商AAEBS",
//     parentId:"5e6a6b20937f4db991203b369c9d9686",
//     parentPath:"5e6a6b20937f4db991203b369c9d9686",
//     selfCtcCount:6,
//     selfLtcCount:6,
//     testcaseList:[{},{},...],//======
//     type:"testcase_project"
// }]

// type each-in-testcaseList={
//     testcaseInfo:{},
//     variables:[]
// }

// type  testcaseInfo={
//     "choosedCtcNum": null,
//     "createTime": "2024-12-03T07:26:04.000+00:00",
//     "createUser": "83a2ee264ba546ff82f552edff217bf4",
//     "createUserDelete": null,
//     "createUserName": "许琳麒",
//     "ctcs": [],
//     "customFieldData": null,
//     "customValue": null,
//     "description": "在平直道路上，主车以80km/h的恒定车速沿车道中心线行驶。",
//     "folderId": "07e09902fcb64b8e8cad7097a9ff5051",//==========上级id
//     "hasDeleted": null,
//     "id": "0ab71c0612a9499bb6ace0067d778448",//===========
//     "modifyTime": "2024-12-03T07:26:04.000+00:00",
//     "modifyUser": "83a2ee264ba546ff82f552edff217bf4",
//     "modifyUserName": "许琳麒",
//     "preConditionDesc": "域控上电连接VTD，加载动态场景",
//     "priority": "中",//========优先级
//     "prop": null,
//     "requireNumberAndId": null,
//     "resetDesc": "关闭AEBS功能：AEBS2_21_Drvractivationdemand = 0x0: the driver does not want the Advanced EmergencyBraking System to warn or intervene at any time(deactivation of system)关闭VTD场景域控下电",
//     "rootId": "5e6a6b20937f4db991203b369c9d9686",
//     steps:[],
//     "tags": "状态机",
//     "templateType": "测试文本",
//     "testType": "自动&手动测试",
//     "testcaseId": "0ab71c0612a9499bb6ace0067d778448",//========
//     "testcaseName": "Off_to_On_T1",//=====用例名称
//     "testcaseNumber": "AEBS_000_001",//=====用例编号
//     "testcaseTestStage": null
// }

// const steps=[
//         {
//             "expectResult": "AEBS功能切换至开启状态\nAEBS1_SysStat = 0x0: system is not ready (initialization not finished)\n（功能规范里的信号名：AdvancedEmergencyBrakingSysState = 0x3: System Is Ready And Activated）",
//             "id": "9ffe5066eb18420aaf95639d3536c91e",
//             "orderNum": 1,
//             "stepId": null,
//             "testStep": "1. 开启AEBS功能:AEBS2_21_Drvractivationdemand = 0x1:the driver wants the Advanced Emergency BrakingSystem to warn or intervene if necessary(no deactivation of system)3. 仿真30秒",
//             "testcaseId": "0ab71c0612a9499bb6ace0067d778448"
//         }
//     ],
