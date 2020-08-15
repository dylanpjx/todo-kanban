let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/projects/todo-kanban/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +130 App.js
badd +1 components/Board.js
badd +66 components/Col.js
badd +18 components/Task.js
badd +44 helpers/initialState.js
badd +21 components/Header.js
badd +17 helpers/ColMenu.js
badd +2 ~/projects/beautiful-dnd-tutorial/src/initialState.js
badd +18 ~/projects/beautiful-dnd-tutorial/src/App.js
badd +1 helpers/Editable.js
badd +11 helpers/AddTask.js
badd +22 helpers/AddCol.js
badd +14 helpers/DelTask.js
badd +3 components/Frontpage.js
badd +6 ~/.config/nvim/init.vim
badd +27 ~/.config/nvim/settings.vim
badd +23 ~/.config/nvim/mappings.vim
badd +9 index.js
badd +1 helpers/NavBar.js
badd +12 ~/projects/todo-kanban/package.json
badd +56 ~/.config/nvim/plugins.vim
badd +1 \'
badd +20 index.css
badd +23 ~/projects/todo-kanban/.gitignore
badd +26 helpers/BoardMenu.js
badd +1 test.txt
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
exe 'vert 1resize ' . ((&columns * 57 + 85) / 170)
exe 'vert 2resize ' . ((&columns * 56 + 85) / 170)
exe 'vert 3resize ' . ((&columns * 55 + 85) / 170)
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
let s:l = 1 - ((0 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
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
let s:l = 8 - ((7 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
8
normal! 0
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
let s:l = 48 - ((10 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
48
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 57 + 85) / 170)
exe 'vert 2resize ' . ((&columns * 56 + 85) / 170)
exe 'vert 3resize ' . ((&columns * 55 + 85) / 170)
tabedit helpers/Editable.js
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
exe 'vert 1resize ' . ((&columns * 55 + 85) / 170)
exe 'vert 2resize ' . ((&columns * 56 + 85) / 170)
exe 'vert 3resize ' . ((&columns * 57 + 85) / 170)
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
let s:l = 5 - ((4 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
5
normal! 0
wincmd w
argglobal
if bufexists("helpers/AddTask.js") | buffer helpers/AddTask.js | else | edit helpers/AddTask.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 6 - ((5 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 0
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
let s:l = 31 - ((15 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
31
normal! 0
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 55 + 85) / 170)
exe 'vert 2resize ' . ((&columns * 56 + 85) / 170)
exe 'vert 3resize ' . ((&columns * 57 + 85) / 170)
tabedit helpers/initialState.js
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
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
let s:l = 45 - ((24 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
45
normal! 019|
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
