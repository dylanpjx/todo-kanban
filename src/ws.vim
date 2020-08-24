let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/projects/todo-kanban/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +7 App.js
badd +1 components/Board.js
badd +66 components/Col.js
badd +18 components/Task.js
badd +1 helpers/initialState.js
badd +28 components/Header.js
badd +17 helpers/ColMenu.js
badd +2 ~/projects/beautiful-dnd-tutorial/src/initialState.js
badd +18 ~/projects/beautiful-dnd-tutorial/src/App.js
badd +13 helpers/Editable.js
badd +5 helpers/AddTask.js
badd +7 helpers/AddCol.js
badd +14 helpers/DelTask.js
badd +3 components/Frontpage.js
badd +4 ~/.config/nvim/init.vim
badd +27 ~/.config/nvim/settings.vim
badd +23 ~/.config/nvim/mappings.vim
badd +9 index.js
badd +1 helpers/NavBar.js
badd +12 ~/projects/todo-kanban/package.json
badd +20 ~/.config/nvim/plugins.vim
badd +1 \'
badd +3 index.css
badd +23 ~/projects/todo-kanban/.gitignore
badd +26 helpers/BoardMenu.js
badd +1 test.txt
badd +1 NERD_tree_2
badd +37 components/NavBar.js
argglobal
%argdel
$argadd helpers/Editable.js
set stal=2
edit components/Board.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 67 - ((39 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
67
normal! 0
wincmd w
argglobal
if bufexists("components/Col.js") | buffer components/Col.js | else | edit components/Col.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 90 - ((18 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
90
normal! 024|
wincmd w
argglobal
if bufexists("components/Task.js") | buffer components/Task.js | else | edit components/Task.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 31 - ((1 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
31
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
tabedit helpers/AddCol.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 11 - ((9 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
normal! 023|
wincmd w
argglobal
if bufexists("components/NavBar.js") | buffer components/NavBar.js | else | edit components/NavBar.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 40 - ((24 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
40
normal! 04|
wincmd w
argglobal
if bufexists("helpers/Editable.js") | buffer helpers/Editable.js | else | edit helpers/Editable.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 59 - ((20 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
59
normal! 027|
wincmd w
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
tabedit helpers/initialState.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((12 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 013|
wincmd w
argglobal
if bufexists("App.js") | buffer App.js | else | edit App.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 170 - ((20 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
170
normal! 0
wincmd w
argglobal
if bufexists("index.css") | buffer index.css | else | edit index.css | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 020|
wincmd w
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
tabnext 2
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
