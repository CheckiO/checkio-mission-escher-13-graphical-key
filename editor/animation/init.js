//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function graphicalKeyCanvas(dom, input, routes) {
            const attr = {
                line: {
                    thin: {
                        'stroke': '#6FB3DE',
                        "stroke-width": 0.5,
                    },
                    route: {
                        'stroke': 'orange',
                        "stroke-width": 2,
                    },
                },
                text: {
                    thin: {
                        "stroke-width": 0,
                        'fill': '#65A1CF',
                        'font-size': '20px',
                        'font-family': 'robot',
                    },
                    deep: {
                        "stroke-width": 0,
                        'fill': '#294270',
                        'stroke': '#294270',
                        'font-size': '20px',
                        'font-family': 'robot',
                    },
                    one_example: {
                        "stroke-width": 0,
                        'fill': '#65A1CF',
                        'stroke': '#294270',
                        'font-size': '16px',
                        'font-family': 'robot',
                    },
                }
            };

            /*----------------------------------------------*
             *
             * graphical key
             *
             *----------------------------------------------*/
            if (! routes)
                return;
            const SIZE = 30; 
            const os = 32;
            const grid = input;
            const route = routes[Math.floor(Math.random() * routes.length)];
            console.log('grid:', grid);
            console.log('route:', route);
            const [w, h] = [grid[0].length, grid.length];
            const paper
                = Raphael(dom, SIZE*(w)+os*2, SIZE*(h)+os*2, 0, 0);

            const fig_dic = {};

            for (let r=0; r < h; r += 1) {
                for (let c=0; c < w; c += 1) {
                    const rt = 
                        paper.rect(c*SIZE+os, 
                            r*SIZE+os, SIZE, SIZE).attr(attr.line.thin);
                    fig_dic[r*100+c] =
                        paper.text( c*SIZE+os+15,
                            r*SIZE+os+15, grid[r][c]).attr(attr.text.thin);
                }
            }

            function draw_line(s) {
                let i = 0;

                (function fn2(){
                    i += 1;

                    if (i === route.length)
                        return

                    const [nr, nc] = [route[i][0], route[i][1]];
                    const path_ary = p.attrs.path;

                    fig_dic[nr*100+nc].animate(attr.text.deep, 1000);
                    p.animate({'path': path_ary.join(',')
                        + ' L' + (nc*SIZE+os+15) + ',' + (nr*SIZE+os+15)},
                        300, fn2);
                             // do not execute fn2
                })();
            }

            const [sy, sx] = [route[0][0], route[0][1]];

            // prepare line
            const p =
            paper.path('M'+ (sx*SIZE+os+15)
                + ',' +  (sy*SIZE+os+15)).attr(attr.line.route);

            // first letter
            fig_dic[sy*100+sx].animate(attr.text.deep, 2000);
            if (routes.length > 1)
                paper.text(SIZE*w/2+os, SIZE*h+SIZE/2+os,
                    'one example').attr(attr.text.one_example);
            draw_line(grid[sy][sx]);
        }
        
        var $tryit;

        var io = new extIO({
            multipleArguments: true,
            functions: {
                python: 'g_key',
                js: 'gKey'
            },
            animation: function($expl, data){
                graphicalKeyCanvas($expl[0],
                    data.in[0], data.ext && data.ext.explanation);
            }
        });
        io.start();
    }
);
