{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red14\green110\blue109;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 './App.css'\cf4 \strokec4 ; \cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \{useState\} \cf2 \strokec2 from\cf4 \strokec4  \cf5 \strokec5 "react"\cf4 \strokec4 ; \cb1 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \{validateEmail\} \cf2 \strokec2 from\cf4 \strokec4  \cf5 \strokec5 "../src/utils"\cf4 \strokec4 ; \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3  \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 PasswordErrorMessage\cf4 \strokec4  = () => \{ \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3  \cf2 \strokec2 return\cf4 \strokec4  ( \cb1 \
\cb3    <p className=\cf5 \strokec5 "FieldError"\cf4 \strokec4 >\cf6 \strokec6 Password\cf4 \strokec4  should have at least \cf7 \strokec7 8\cf4 \strokec4  characters</p> \cb1 \
\cb3  ); \cb1 \
\cb3 \}; \cb1 \
\cb3  \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf6 \strokec6 App\cf4 \strokec4 () \{ \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 \cb3  \cf2 \strokec2 const\cf4 \strokec4  [firstName, setFirstName] = useState(\cf5 \strokec5 ""\cf4 \strokec4 ); \cb1 \
\cb3  \cf2 \strokec2 const\cf4 \strokec4  [lastName, setLastName] = useState(\cf5 \strokec5 ""\cf4 \strokec4 ); \cb1 \
\cb3  \cf2 \strokec2 const\cf4 \strokec4  [email, setEmail] = useState(\cf5 \strokec5 ""\cf4 \strokec4 ); \cb1 \
\cb3  \cf2 \strokec2 const\cf4 \strokec4  [password, setPassword] = useState(\{ \cb1 \
\cb3    value: \cf5 \strokec5 ""\cf4 \strokec4 , \cb1 \
\cb3    isTouched: \cf2 \strokec2 false\cf4 \strokec4 , \cb1 \
\cb3  \}); \cb1 \
\cb3  \cf2 \strokec2 const\cf4 \strokec4  [role, setRole] = useState(\cf5 \strokec5 "role"\cf4 \strokec4 ); \cb1 \
\
\cb3  \cf2 \strokec2 const\cf4 \strokec4  getIsFormValid = () => \{ \cb1 \
\cb3    \cf2 \strokec2 return\cf4 \strokec4  ( \cb1 \
\cb3      firstName && \cb1 \
\cb3      validateEmail(email) && \cb1 \
\cb3      password.value.length >= \cf7 \strokec7 8\cf4 \strokec4  && \cb1 \
\cb3      role !== \cf5 \strokec5 "role"\cf4 \strokec4  \cb1 \
\cb3    ); \cb1 \
\cb3  \}; \cb1 \
\cb3  \cb1 \
\cb3  \cf2 \strokec2 const\cf4 \strokec4  clearForm = () => \{ \cb1 \
\cb3    setFirstName(\cf5 \strokec5 ""\cf4 \strokec4 ); \cb1 \
\cb3    setLastName(\cf5 \strokec5 ""\cf4 \strokec4 ); \cb1 \
\cb3    setEmail(\cf5 \strokec5 ""\cf4 \strokec4 ); \cb1 \
\cb3    setPassword(\{ \cb1 \
\cb3      value: \cf5 \strokec5 ""\cf4 \strokec4 , \cb1 \
\cb3      isTouched: \cf2 \strokec2 false\cf4 \strokec4 , \cb1 \
\cb3    \}); \cb1 \
\cb3    setRole(\cf5 \strokec5 "role"\cf4 \strokec4 ); \cb1 \
\cb3  \}; \cb1 \
\cb3  \cb1 \
\cb3  \cf2 \strokec2 const\cf4 \strokec4  handleSubmit = (e) => \{ \cb1 \
\cb3    e.preventDefault(); \cb1 \
\cb3    alert(\cf5 \strokec5 "Account created!"\cf4 \strokec4 ); \cb1 \
\cb3    clearForm(); \cb1 \
\cb3  \}; \cb1 \
\cb3  \cb1 \
\cb3  \cf2 \strokec2 return\cf4 \strokec4  ( \cb1 \
\cb3    <div className=\cf5 \strokec5 "App"\cf4 \strokec4 > \cb1 \
\cb3      <form onSubmit=\{handleSubmit\}> \cb1 \
\cb3        <fieldset> \cb1 \
\cb3          <h2>\cf6 \strokec6 Sign\cf4 \strokec4  \cf6 \strokec6 Up\cf4 \strokec4 </h2> \cb1 \
\cb3          <div className=\cf5 \strokec5 "Field"\cf4 \strokec4 > \cb1 \
\cb3            <label> \cb1 \
\cb3              \cf6 \strokec6 First\cf4 \strokec4  name <sup>*</sup> \cb1 \
\cb3            </label> \cb1 \
\cb3            <input \cb1 \
\cb3              value=\{firstName\} \cb1 \
\cb3              onChange=\{(e) => \{ \cb1 \
\cb3                setFirstName(e.target.value); \cb1 \
\cb3              \}\} \cb1 \
\cb3              placeholder=\cf5 \strokec5 "First name"\cf4 \strokec4  \cb1 \
\cb3            /> \cb1 \
\cb3          </div> \cb1 \
\cb3          <div className=\cf5 \strokec5 "Field"\cf4 \strokec4 > \cb1 \
\cb3            <label>\cf6 \strokec6 Last\cf4 \strokec4  name</label> \cb1 \
\cb3            <input \cb1 \
\cb3              value=\{lastName\} \cb1 \
\cb3              onChange=\{(e) => \{ \cb1 \
\cb3                setLastName(e.target.value); \cb1 \
\cb3              \}\} \cb1 \
\cb3              placeholder=\cf5 \strokec5 "Last name"\cf4 \strokec4  \cb1 \
\cb3            /> \cb1 \
\cb3          </div> \cb1 \
\cb3          <div className=\cf5 \strokec5 "Field"\cf4 \strokec4 > \cb1 \
\cb3            <label> \cb1 \
\cb3              \cf6 \strokec6 Email\cf4 \strokec4  address <sup>*</sup> \cb1 \
\cb3            </label> \cb1 \
\cb3            <input \cb1 \
\cb3              value=\{email\} \cb1 \
\cb3              onChange=\{(e) => \{ \cb1 \
\cb3                setEmail(e.target.value); \cb1 \
\cb3              \}\} \cb1 \
\cb3              placeholder=\cf5 \strokec5 "Email address"\cf4 \strokec4  \cb1 \
\cb3            /> \cb1 \
\cb3          </div> \cb1 \
\cb3          <div className=\cf5 \strokec5 "Field"\cf4 \strokec4 > \cb1 \
\cb3            <label> \cb1 \
\cb3              \cf6 \strokec6 Password\cf4 \strokec4  <sup>*</sup> \cb1 \
\cb3            </label> \cb1 \
\cb3            <input \cb1 \
\cb3              value=\{password.value\} \cb1 \
\cb3              type=\cf5 \strokec5 "password"\cf4 \strokec4  \cb1 \
\cb3              onChange=\{(e) => \{ \cb1 \
\cb3                setPassword(\{ ...password, value: e.target.value \}); \cb1 \
\cb3              \}\} \cb1 \
\cb3              onBlur=\{() => \{ \cb1 \
\cb3                setPassword(\{ ...password, isTouched: \cf2 \strokec2 true\cf4 \strokec4  \}); \cb1 \
\cb3              \}\} \cb1 \
\cb3              placeholder=\cf5 \strokec5 "Password"\cf4 \strokec4  \cb1 \
\cb3            /> \cb1 \
\cb3            \{password.isTouched && password.value.length < \cf7 \strokec7 8\cf4 \strokec4  ? ( \cb1 \
\cb3              <\cf6 \strokec6 PasswordErrorMessage\cf4 \strokec4  /> \cb1 \
\cb3            ) : \cf2 \strokec2 null\cf4 \strokec4 \} \cb1 \
\cb3          </div> \cb1 \
\cb3          <div className=\cf5 \strokec5 "Field"\cf4 \strokec4 > \cb1 \
\cb3            <label> \cb1 \
\cb3              \cf6 \strokec6 Role\cf4 \strokec4  <sup>*</sup> \cb1 \
\cb3            </label> \cb1 \
\cb3            <select value=\{role\} onChange=\{(e) => setRole(e.target.value)\}> \cb1 \
\cb3              <option value=\cf5 \strokec5 "role"\cf4 \strokec4 >\cf6 \strokec6 Role\cf4 \strokec4 </option> \cb1 \
\cb3              <option value=\cf5 \strokec5 "individual"\cf4 \strokec4 >\cf6 \strokec6 Individual\cf4 \strokec4 </option> \cb1 \
\cb3              <option value=\cf5 \strokec5 "business"\cf4 \strokec4 >\cf6 \strokec6 Business\cf4 \strokec4 </option> \cb1 \
\cb3            </select> \cb1 \
\cb3          </div> \cb1 \
\cb3          <button type=\cf5 \strokec5 "submit"\cf4 \strokec4  disabled=\{!getIsFormValid()\}> \cb1 \
\cb3            \cf6 \strokec6 Create\cf4 \strokec4  account \cb1 \
\cb3          </button> \cb1 \
\cb3        </fieldset> \cb1 \
\cb3      </form> \cb1 \
\cb3    </div> \cb1 \
\cb3  ); \cb1 \
\cb3 \} \cb1 \
\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf6 \strokec6 App\cf4 \strokec4 ; \cb1 \
}