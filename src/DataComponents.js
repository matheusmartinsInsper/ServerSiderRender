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
                      "flexDirection":'row',
                      'width':'400px',
                      'height':'50px'
                    }
        },
        {
            "component": "container-body",
            "children": [
                {
                    "component": "container-news-notices",
                    "style": {
                        "display":'flex',
                        "justifyContent":'center',
                        "alignItems":'center',
                        "backgroundColor":'blue',
                        "flexDirection":'row',
                        "color": "black",
                        'width':'400px',
                        "height": "30px"
                      },
                    "text":"teste"
                },
                {
                    "component": "container-basic",
                    "children": [
                        {
                            "component": "container-action",
                            "text": "PAINEL",
                            "icon": 'fafile',
                            "style": {
                        "display":'flex',
                        "justifyContent":'center',
                        "alignItems":'center',
                        "backgroundColor":'white',
                        "flexDirection":'column',
                        "color": "black",
                        "borderRadius": "5px",
                        'padding':'5px'
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
                            "icon": 'fafile',
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
                            "icon": 'fafile',
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
                            "icon": 'faambulance',
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
                      "display":'grid',
                      "justifyContent":'center',
                      'gridTemplateColumns':'repeat(2, 1fr)',
                      "alignItems":'center',
                      "backgroundColor":'whitesmoke',
                      "flexDirection":'column',
                      "padding":"10px",
                      "color":"black",
                      'fontSize':'15px',
                      'marginTop':'20px',
                      'marginBottom':'20px'
                    }
                }
            ],
            "style": {
              "display":'flex',
              "justifyContent":'center',
              "alignItems":'center',
              "backgroundColor":'whitesmoke',
              'width':'400px',
              "flexDirection":'column'
            }
        },
        {
            "component": "container-footer-default"
        }
    ]
  }
  export default jsonData;