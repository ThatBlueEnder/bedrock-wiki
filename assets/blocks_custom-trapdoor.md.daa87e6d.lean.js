import{_ as r,c,b as s,a,w as l,d as n,e,r as p,o as D}from"./404.md.d8b119ba.js";const E=JSON.parse('{"title":"Custom Trapdoors","description":"","frontmatter":{"title":"Custom Trapdoors","category":"Vanilla Re-Creations","tags":["experimental","expert"],"mentions":["Kaioga5"]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Custom Trapdoor","slug":"custom-trapdoor","link":"#custom-trapdoor","children":[]},{"level":2,"title":"Geometry","slug":"geometry","link":"#geometry","children":[]}],"relativePath":"blocks/custom-trapdoor.md"}'),F={name:"blocks/custom-trapdoor.md"},y=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},[n("FORMAT VERSION "),s("code",null,"1.20.10")]),s("p",null,[n("This tutorial assumes a basic understanding of blocks. Check out "),s("a",{href:"/blocks/blocks-stable.html"},"block features"),n(" before starting.")])],-1),C={class:"warning custom-block"},A=e("",6),i=e("",3),u=s("div",{class:"language-json line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"format_version"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1.12.0"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C792EA"}},"minecraft:geometry"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"description"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"identifier"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"geometry.trapdoor"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"texture_width"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"texture_height"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"visible_bounds_width"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"visible_bounds_height"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1.5"),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"visible_bounds_offset"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0.25"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#FFCB6B"}},"bones"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"name"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"trapdoor"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"pivot"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"cubes"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"						"),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"							"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"origin"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"-8"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"-8"),s("span",{style:{color:"#89DDFF"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"							"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"							"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"								"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"north"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},"],"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"-16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"-3"),s("span",{style:{color:"#89DDFF"}},"]},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"								"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"east"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},"],"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"-16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"-3"),s("span",{style:{color:"#89DDFF"}},"]},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"								"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"south"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},"],"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"-16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"-3"),s("span",{style:{color:"#89DDFF"}},"]},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"								"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"west"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#89DDFF"}},"],"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"-16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"-3"),s("span",{style:{color:"#89DDFF"}},"]},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"								"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"up"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},"],"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"-16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"-16"),s("span",{style:{color:"#89DDFF"}},"]},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"								"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#916B53"}},"down"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},"],"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#82AAFF"}},"uv_size"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"16"),s("span",{style:{color:"#89DDFF"}},"]}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"							"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"						"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"name"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"trapdoor"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"					"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F78C6C"}},"pivot"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"				"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			"),s("span",{style:{color:"#89DDFF"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"]")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br"),s("span",{class:"line-number"},"31"),s("br"),s("span",{class:"line-number"},"32"),s("br"),s("span",{class:"line-number"},"33"),s("br"),s("span",{class:"line-number"},"34"),s("br"),s("span",{class:"line-number"},"35"),s("br"),s("span",{class:"line-number"},"36"),s("br"),s("span",{class:"line-number"},"37"),s("br"),s("span",{class:"line-number"},"38"),s("br"),s("span",{class:"line-number"},"39"),s("br")])],-1),b=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"Vanilla trapdoors have a few issues in the direction of the texture in certain faces and having a height of 2.95 when it should be 3. This block template and geometry fixes both of those issues.")],-1);function m(q,d,_,f,k,h){const o=p("CodeHeader"),t=p("Spoiler");return D(),c("div",null,[y,s("div",C,[A,a(o,null,{default:l(()=>[n("BP/blocks/custom_trapdoor.json")]),_:1}),i,a(t,{title:"Geometry JSON"},{default:l(()=>[a(o,null,{default:l(()=>[n("RP/models/blocks/trapdoor.geo.json")]),_:1}),u]),_:1}),b])])}const B=r(F,[["render",m]]);export{E as __pageData,B as default};