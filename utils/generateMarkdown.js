


// var license = data.license;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

  if (data.license == "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (data.license == "BSD 3-Clause License") {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else if (data.license == "Attribution CC BY") {
    return "![licensebuttons by](https://licensebuttons.net/l/by/3.0/88x31.png)";
  } else if (data.license == "Attribution-ShareAlike CC BY-SA") {
    return "![licensebuttons by-sa](https://licensebuttons.net/l/by-sa/3.0/88x31.png)";
  } else if (data.license == "Attribution-NoDerivs CC BY-ND") {
    return "![licensebuttons by-nd](https://licensebuttons.net/l/by-nd/3.0/88x31.png)";
  } else if (data.license == "Attribution-NonCommercial CC BY-NC") {
    return "![licensebuttons by-nc](https://licensebuttons.net/l/by-nc/3.0/88x31.png)";
  } else if (data.license == "Attribution-NonCommercial-ShareAlike CC BY-NC-SA") {
    return "![licensebuttons by-nc-sa](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)";
  } else if (data.license == "The MIT License") {
    return "![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (data.license == "No License") {
    return "";
  } else {console.log("Uhhh. Something weird happened.... Restart the whole thing...") }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  if (data.license == "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license == "BSD 3-Clause License") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license == "Attribution CC BY") {
    return "(https://creativecommons.org/licenses/by/4.0)";
  } else if (data.license == "Attribution-ShareAlike CC BY-SA") {
    return "(https://creativecommons.org/licenses/by-sa/4.0)";
  } else if (data.license == "Attribution-NoDerivs CC BY-ND") {
    return "(https://creativecommons.org/licenses/by-nd/4.0)";
  } else if (data.license == "Attribution-NonCommercial CC BY-NC") {
    return "(https://creativecommons.org/licenses/by-nc/4.0)";
  } else if (data.license == "Attribution-NonCommercial-ShareAlike CC BY-NC-SA") {
    return "(https://creativecommons.org/licenses/by-nc-sa/4.0)";
  } else if (data.license == "The MIT License") {
    return "(https://lbesson.mit-license.org/)";
  } else if (data.license == "No License") {
    return "";
  } else {console.log("Uhhh. Something weird happened.... Restart the whole thing...")}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  if (data.license == "Apache 2.0") {
    return `   Copyright ${data.year} ${data.ownerName}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else if (data.license == "BSD 3-Clause License") {
    return `Copyright ${data.year} ${data.ownerName}

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } else if (data.license == "Attribution CC BY") {
    return "This work is licensed under a Creative Commons Attribution 4.0 International License: https://creativecommons.org/licenses/by/4.0/legalcode";
  } else if (data.license == "Attribution-ShareAlike CC BY-SA") {
    return "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License: https://creativecommons.org/licenses/by-sa/4.0/legalcode";
  } else if (data.license == "Attribution-NoDerivs CC BY-ND") {
    return "This work is licensed under a Creative Commons Attribution-NoDerivatves 4.0 International License: https://creativecommons.org/licenses/by-nd/4.0/legalcode";
  } else if (data.license == "Attribution-NonCommercial CC BY-NC") {
    return "This work is licensed under Creative Commons Attribution-NonCommercial 4.0 International License: https://creativecommons.org/licenses/by-nc/4.0/legalcode";
  } else if (data.license == "Attribution-NonCommercial-ShareAlike CC BY-NC-SA") {
    return "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode";
  } else if (data.license == "The MIT License") {
    return `Copyright ${data.year} ${data.ownerName}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (data.license == "No License") {
    return "This work is not licensed under anything right now.";
  } else {console.log("Uhhh. Something weird happened.... Restart the whole thing...")}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  

  if (data.portfolio !== "" ) {
    data.portfolio = `- [Portfolio](${data.portfolio})`}
// lmao this is kinda janky
  if (data.linkedIn !== "" ) {
    data.linkedIn = `- [LinkedIn](${data.linkedIn})`}

  if (data.gitlink !== "" ) {
    data.gitlink = `- [GitHub Link](${data.gitlink})`}

  if (data.contributing !== "" ) {
    data.contributing = `
### Contributors

${data.contributing}\n`}

  if (data.tests !== "" ) {
    data.tests = `
### Tests

${data.tests}\n`}
  
  if (data.install !== "" ) {
    data.install = `
* [Installation Instructions](#installation-instructions)
      
## Installation Instructions
      
${data.install}\n`} // haha, this link at the top is completely un-necessary, I only include it because it adds a 3rd option to the already short list.
  
  if (data.usage !== "" ) {
    data.usge = `
### Usage

${data.usage}\n`}








  return `# ${data.title}
  [${renderLicenseBadge(data)}]${renderLicenseLink(data)}

  ${data.description}

  ${data.usage}

* [Author](#author)
* [License](#license)
  ${data.install}

## Author 
  GitHub username: ${data.gitHubUserName}
  \n
  ${data.ownerName}
\n
  ${data.gitlink}
  ${data.portfolio}
  ${data.linkedIn}

  
  ${data.contributing}

  ${data.tests}
## License
  [${renderLicenseBadge(data)}]${renderLicenseLink(data)}
  \n${renderLicenseSection(data)}

`;
}











module.exports = generateMarkdown;
