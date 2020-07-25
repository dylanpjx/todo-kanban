let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/projects/todo-kanban/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +167 App.js
badd +1 components/Board.js
badd +71 components/Col.js
badd +63 components/Task.js
badd +28 helpers/initialState.js
badd +14 components/Header.js
badd +34 helpers/ColMenu.js
badd +2 ~/projects/beautiful-dnd-tutorial/src/initialState.js
badd +18 ~/projects/beautiful-dnd-tutorial/src/App.js
badd +23 helpers/Editable.js
badd +11 helpers/AddTask.js
badd +22 helpers/AddCol.js
badd +27 helpers/DelTask.js
badd +3 components/Frontpage.js
badd +4 ~/.config/nvim/init.vim
badd +39 ~/.config/nvim/settings.vim
badd +23 ~/.config/nvim/mappings.vim
badd +9 index.js
badd +1 helpers/NavBar.js
badd +12 ~/projects/todo-kanban/package.json
badd +56 ~/.config/nvim/plugins.vim
badd +1 \'
badd +3 index.css
badd +23 ~/projects/todo-kanban/.gitignore
badd +26 helpers/BoardMenu.js
argglobal
%argdel
$argadd App.js
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
exe 'vert 1resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 3resize ' . ((&columns * 78 + 118) / 236)
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
let s:l = 7 - ((6 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
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
let s:l = 51 - ((18 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
51
normal! 013|
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
let s:l = 74 - ((41 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
74
normal! 025|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 3resize ' . ((&columns * 78 + 118) / 236)
tabedit helpers/ColMenu.js
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
exe 'vert 1resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 3resize ' . ((&columns * 78 + 118) / 236)
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
let s:l = 18 - ((17 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
18
normal! 037|
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
let s:l = 33 - ((26 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
33
normal! 020|
wincmd w
argglobal
if bufexists("components/Header.js") | buffer components/Header.js | else | edit components/Header.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 36 - ((35 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
36
normal! 011|
wincmd w
exe 'vert 1resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 78 + 118) / 236)
exe 'vert 3resize ' . ((&columns * 78 + 118) / 236)
tabedit App.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 118 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 117 + 118) / 236)
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
let s:l = 156 - ((16 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
156
normal! 0
wincmd w
argglobal
if bufexists("helpers/initialState.js") | buffer helpers/initialState.js | else | edit helpers/initialState.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 39 - ((38 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
39
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 118 + 118) / 236)
exe 'vert 2resize ' . ((&columns * 117 + 118) / 236)
tabnext 1
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
