"use strict";(self.webpackChunkoi_web=self.webpackChunkoi_web||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),b=l,m=p["".concat(d,".").concat(b)]||p[b]||u[b]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=b;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:l,r[1]=a;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(7462),l=(n(7294),n(3905));const i={sidebar_position:2},r="Getting Started",a={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Dependencies",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/object-introspection/docs/getting-started",draft:!1,editUrl:"https://github.com/facebookexperimental/object-introspection/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mysidebar",previous:{title:"Introduction",permalink:"/object-introspection/docs/intro"},next:{title:"A Simple Address Book Example",permalink:"/object-introspection/docs/addrbook-intro"}},d={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Ubuntu 22.04.1 (Jammy)",id:"ubuntu-22041-jammy",level:3},{value:"OpenSuse Tumbleweed",id:"opensuse-tumbleweed",level:3},{value:"Fedora 37",id:"fedora-37",level:3},{value:"Clone the OI repo:",id:"clone-the-oi-repo",level:3},{value:"Compile and run tests",id:"compile-and-run-tests",level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"First ensure your system has all the dependencies installed. We have tested on Ubuntu 22.04.01 (Jammy) OpenSuse and Fedora 37 and the dependencies are listed below. Please let us know if you have issues with these or any other Linux repos and we'll do our best to look into it."),(0,l.kt)("h3",{id:"ubuntu-22041-jammy"},"Ubuntu 22.04.1 (Jammy)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo apt-get update\n$ sudo apt-get install -y bison autopoint build-essential clang-12 cmake flex gawk libboost-all-dev libbz2-dev libcap2-bin libclang-12-dev libcurl4-gnutls-dev libdouble-conversion-dev libdw-dev libfmt-dev libgflags-dev libgmock-dev libgoogle-glog-dev libgtest-dev libjemalloc-dev libmsgpack-dev libzstd-dev llvm-12-dev ninja-build pkg-config python3-setuptools sudo xsltproc libboost-all-dev\n$ sudo pip3 install toml\n$ cmake -G Ninja -B build/ -DWITH_TESTS=On\n")),(0,l.kt)("h3",{id:"opensuse-tumbleweed"},"OpenSuse Tumbleweed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo zypper in git ninja cmake llvm12-devel clang12-devel binutils-gold gcc gcc-c++ libcap-progs sudo gflags-devel-static gflags-devel bison libboost_{system,filesystem,thread,regex,serialization}-devel msgpack-c-devel libzstd-devel flex gtest gmock python3-toml python3-devel python3-setuptools gettext-tools findutils zlib-devel libcurl-devel libbz2-devel libdw-devel libdwarf-devel jemalloc-devel msgpack-cxx-devel double-conversion-devel fmt-devel\n$ sudo apt install libdw-dev libclang-dev llvm-dev libboost-all-dev libgtest-dev libbz2-dev libgflags-dev libzstd-dev libcurl4-gnutls-dev ninja-build python3-toml\n")),(0,l.kt)("p",null,"It seems like static versions of clang/llvm are not packaged in opensuse, but we default to looking for the static versions. To fix this, please add the following to your cmake generation command below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-DFORCE_BOOST_STATIC=Off -DFORCE_LLVM_STATIC=Off\n")),(0,l.kt)("h3",{id:"fedora-37"},"Fedora 37"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo dnf install boost-static elfutils-devel clang clang12-devel llvm12-devel llvm12-static gtest-devel gflags-devel gmock-devel cmake autoconf automake libtool python3-devel bzip2-devel fmt-devel gettext-devel libcurl-devel ninja-build python3-toml bison bison-devel flex msgpack-devel jemalloc-devel double-conversion-static\n$ cmake -G Ninja -B build/ -DLLVM_DIR=/usr/lib64/llvm12/lib/cmake/llvm -DClang_DIR=/usr/lib64/llvm12/lib/cmake/clang -DFORCE_LLVM_STATIC=Off\n")),(0,l.kt)("h3",{id:"clone-the-oi-repo"},"Clone the OI repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git clone git@github.com:facebookexperimental/object-introspection.git\nCloning into 'object-introspection'...\nremote: Enumerating objects: 8694, done.\nremote: Counting objects: 100% (116/116), done.\nremote: Compressing objects: 100% (93/93), done.\nremote: Total 8694 (delta 36), reused 69 (delta 19), pack-reused 8578\nReceiving objects: 100% (8694/8694), 2.60 MiB | 4.59 MiB/s, done.\nResolving deltas: 100% (6339/6339), done.\n")),(0,l.kt)("h3",{id:"compile-and-run-tests"},"Compile and run tests"),(0,l.kt)("p",null,"Now compile the ",(0,l.kt)("inlineCode",{parentName:"p"},"oid")," binary:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ cd object-introspection/\n$ cmake --build build/ -j\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ~/object-introspection# ls -l build/oid\n-rwxr-xr-x 1 root root 86818272 Dec 16 18:08 build/oid\n")),(0,l.kt)("p",null,"OI needs a system specific configuration file generating so do that now using the ",(0,l.kt)("inlineCode",{parentName:"p"},"tools/config_gen.py")," script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ~/object-introspection# tools/config_gen.py -c clang++-12 build/oid-cfg.toml\n$ ls -l build/oid-cfg.toml\n-rw-r--r-- 1 root root 2978 Dec 16 18:18 build/oid-cfg.toml\n")),(0,l.kt)("p",null,"You're now ready to introspect objects!"))}u.isMDXComponent=!0}}]);