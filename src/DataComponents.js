const jsonData={
    "root": [
        {
            "component": "container-header",
            "children": [
                {
                    "component": "container-logo",
                    "path": {
                        "url": ""
                    }
                },
                {
                    "component": "container-logo",
                    "path": {
                        "url": ""
                   }    }
             
            ],
            "style": {
                      "display":'flex',
                      "justifyContent":'center',
                      "alignItems":'center',
                      "backgroundColor":'black',
                      "flexDirection":'column'
                    }
        },
        {
            "component": "container-body",
            "children": [
                {
                    "component": "container-news-notices"
                },
                {
                    "component": "container-basic",
                    "children": [
                        {
                            "component": "container-action",
                            "text": "PAINEL",
                            "path": {
                                "url": "...painel"
                            },
                            "onPress": [
                                {
                                    "action": "",
                                    "route": {
                                        "url": "/"
                                    }
                                }
                            ]
                        },
                        {
                            "component": "container-action",
                            "text": "ESPAÇO CIA",
                            "path": {
                                "url": ""
                            },
                            "onPress": [
                                {
                                    "action": "",
                                    "route": {
                                        "url": "/"
                                    }
                                }
                            ]
                        },
                        {
                            "component": "container-action",
                            "text": "A CAMPANHA",
                            "path": {
                                "url": ""
                            },
                            "onPress": [
                                {
                                    "action": "",
                                    "route": {
                                        "url": "/"
                                    }
                                }
                            ]
                        },
                        {
                            "component": "container-action",
                            "text": "ESPAÇO RH",
                            "path": {
                                "url": ""
                            },
                            "onPress": [
                                {
                                    "action": "/",
                                    "route": {
                                        "url": ""
                                    }
                                }
                            ]
                        }
                    ],
                    "style": {
                      "display":'flex',
                      "justifyContent":'center',
                      "alignItems":'center',
                      "backgroundColor":'white',
                      "flexDirection":'column',
                      "padding":"10px",
                      "color":"red"
                    }
                }
            ],
            "style": {
              "display":'flex',
              "justifyContent":'center',
              "alignItems":'center',
              "backgroundColor":'whitesmoke',
              
            }
        },
        {
            "component": "container-footer-default"
        }
    ]
  }
  export default jsonData;