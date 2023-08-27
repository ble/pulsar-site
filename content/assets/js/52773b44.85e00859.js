"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"release-process",title:"Release process"},s=void 0,o={unversionedId:"release-process",id:"release-process",title:"Release process",description:"This page contains instructions for Pulsar committers on how to perform a release.",source:"@site/contribute/release-process.md",sourceDirName:".",slug:"/release-process",permalink:"/contribute/release-process",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/release-process.md",tags:[],version:"current",lastUpdatedBy:"Julien Jakubowski",lastUpdatedAt:1693134742,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{id:"release-process",title:"Release process"},sidebar:"sidebarDevelopment",previous:{title:"Release policy",permalink:"/contribute/release-policy"},next:{title:"Creating GPG keys",permalink:"/contribute/create-gpg-keys"}},i={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Create a release candidate",id:"create-a-release-candidate",level:2},{value:"Create the release branch",id:"create-the-release-branch",level:3},{value:"Update project version and tag",id:"update-project-version-and-tag",level:3},{value:"Build release artifacts",id:"build-release-artifacts",level:3},{value:"Inspect the artifacts",id:"inspect-the-artifacts",level:3},{value:"Sign and stage the artifacts on SVN",id:"sign-and-stage-the-artifacts-on-svn",level:3},{value:"Stage Maven modules",id:"stage-maven-modules",level:3},{value:"Stage Docker images",id:"stage-docker-images",level:3},{value:"Vote for the release candidate",id:"vote-for-the-release-candidate",level:2},{value:"Promote the release",id:"promote-the-release",level:2},{value:"Publish the final tag",id:"publish-the-final-tag",level:3},{value:"Release the artifacts on SVN",id:"release-the-artifacts-on-svn",level:3},{value:"Release Maven modules",id:"release-maven-modules",level:3},{value:"Release Docker images",id:"release-docker-images",level:3},{value:"Release Helm Chart",id:"release-helm-chart",level:3},{value:"Release Homebrew libpulsar package",id:"release-homebrew-libpulsar-package",level:3},{value:"Release Python client",id:"release-python-client",level:3},{value:"Linux",id:"linux",level:4},{value:"macOS",id:"macos",level:4},{value:"Update the document",id:"update-the-document",level:2},{value:"Release notes",id:"release-notes",level:3},{value:"Swagger files",id:"swagger-files",level:3},{value:"Javadoc",id:"javadoc",level:3},{value:"Reference",id:"reference",level:3},{value:"Update the site",id:"update-the-site",level:2},{value:"Announce the release",id:"announce-the-release",level:2},{value:"Write a blog post (optional)",id:"write-a-blog-post-optional",level:2},{value:"Remove old releases",id:"remove-old-releases",level:2},{value:"Move master branch to next version",id:"move-master-branch-to-next-version",level:2}],h={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page contains instructions for Pulsar committers on how to perform a release."),(0,r.kt)("p",null,"The term feature/patch releases used throughout this document is defined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feature releases contain 2.10.0, 2.11.0, 3.0.0, and so on."),(0,r.kt)("li",{parentName:"ul"},"Patch releases refer to bug-fix releases, such as 2.10.1, 2.10.2, and so on.")),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Open a discussion on ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")," to notify others that you volunteer to be the release manager of a specific release. If there are no disagreements, you can start the release process."),(0,r.kt)("p",null,"For feature releases, you should create a new branch named ",(0,r.kt)("inlineCode",{parentName:"p"},"branch-X.Y")," once all PRs with the X.Y.0 milestone are merged. If some PRs with the X.Y.0 milestone are still working in progress and might take much time to complete, you can move them to the next milestone if they are not important. In this case, you'd better notify the author in the PR."),(0,r.kt)("p",null,"For patch releases, if there are no disagreements, you should cherry-pick all merged PRs labeled with ",(0,r.kt)("inlineCode",{parentName:"p"},"release/X.Y.Z")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"branch-X.Y"),". After these PRs are cherry-picked, you should add the ",(0,r.kt)("inlineCode",{parentName:"p"},"cherry-picked/branch-X.Y")," labels."),(0,r.kt)("p",null,"Sometimes some PRs cannot be cherry-picked cleanly, you might need to create a separate PR and move the ",(0,r.kt)("inlineCode",{parentName:"p"},"release/X.Y.Z")," label from the original PR to it. In this case, you can ask the author to help create the new PR."),(0,r.kt)("p",null,"For PRs that are still open, you can choose to delay them to the next release or ping others to review so that they can be merged."),(0,r.kt)("p",null,"To verify the release branch is not broken, you can synchronize the branch in your personal repo and open a PR to trigger the CI."),(0,r.kt)("p",null,"You can use the following command to catch basic compilation, checkstyle or spotbugs errors in your local env before cherry-picking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install -DskipTests\n")),(0,r.kt)("p",null,"If you haven't already done it, ",(0,r.kt)("a",{parentName:"p",href:"/contribute/create-gpg-keys"},"create and publish the GPG key"),". You will use the key to sign the release artifacts."),(0,r.kt)("p",null,"Before you start the next release steps, make sure you have installed these software:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK 17 (for Pulsar version >= 2.11) or JDK 11 (for earlier versions)"),(0,r.kt)("li",{parentName:"ul"},"Maven 3.8.6"),(0,r.kt)("li",{parentName:"ul"},"Zip")),(0,r.kt)("p",null,"Also, you need to ",(0,r.kt)("strong",{parentName:"p"},"clean up the bookkeeper's local compiled")," to make sure the bookkeeper dependency is fetched from the Maven repository, details to see ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/gsbh95b2d9xtcg5fmtxpm9k9q6w68gd2"},"this mailing list thread"),"."),(0,r.kt)("h2",{id:"create-a-release-candidate"},"Create a release candidate"),(0,r.kt)("h3",{id:"create-the-release-branch"},"Create the release branch"),(0,r.kt)("p",null,"We are going to create a branch from ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"branch-v2.X")," where the tag will be generated and where new fixes will be applied as part of the maintenance for the release."),(0,r.kt)("p",null,"The branch needs only to be created for feature releases, and not for patch releases like ",(0,r.kt)("inlineCode",{parentName:"p"},"2.3.1"),". For patch releases, go to the next step."),(0,r.kt)("p",null,"For example, when you create the ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.3.0")," release, the branch ",(0,r.kt)("inlineCode",{parentName:"p"},"branch-2.3")," will be created; but for ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.3.1"),", we\nkeep using the old ",(0,r.kt)("inlineCode",{parentName:"p"},"branch-2.3"),"."),(0,r.kt)("p",null,"In these instructions, a fictitious release ",(0,r.kt)("inlineCode",{parentName:"p"},"2.X.0")," is referred. Change the release version in the examples accordingly with the real version."),(0,r.kt)("p",null,"It is recommended to create a fresh clone of the repository to avoid any local files interfering in the process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/pulsar.git\ncd pulsar\ngit checkout -b branch-2.X origin/master\n")),(0,r.kt)("p",null,"Alternatively, you can use a git workspace to create a new, clean directory on your machine without needing to re-download the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git worktree add ../pulsar.branch-2.X branch-2.X\n")),(0,r.kt)("p",null,"If you created a new branch, update the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/workflows/ci-owasp-dependency-check.yaml"},"CI - OWASP Dependency Check")," workflow so that it will run on the new branch."),(0,r.kt)("p",null,"Note that you should also stop the workflow for previous Pulsar versions that are EOL."),(0,r.kt)("h3",{id:"update-project-version-and-tag"},"Update project version and tag"),(0,r.kt)("p",null,'During the release process, you are going to initially create "candidate" tags, that after verification and approval will get promoted to the "real" final tag.'),(0,r.kt)("p",null,"In this process, the maven version of the project will always be the final one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Bump to the release version\n./src/set-project-version.sh 2.X.0\n\n# Some version may not update the right parent version of `protobuf-shaded/pom.xml`, please double check it.\n\n# Commit\ngit commit -m 'Release 2.X.0' -a\n\n# Create a \"candidate\" tag\n# If you don't sign your commits already, use the following\nexport GPG_TTY=$(tty)\ngit tag -u $USER@apache.org v2.X.0-candidate-1 -m 'Release v2.X.0-candidate-1'\n# If you already sign your commits using your apache.org email, use the following\ngit tag -s v2.X.0-candidate-1 -m 'Release v2.X.0-candidate-1'\n\n# Verify that you signed your tag before pushing it:\ngit tag -v v2.X.0-candidate-1\n\n# Push both the branch and the tag to Github repo\ngit push origin branch-2.X\ngit push origin v2.X.0-candidate-1\n")),(0,r.kt)("p",null,"For patch releases, the tag is like ",(0,r.kt)("inlineCode",{parentName:"p"},"2.3.1"),"."),(0,r.kt)("h3",{id:"build-release-artifacts"},"Build release artifacts"),(0,r.kt)("p",null,"Run the following command to build the artifacts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean install -DskipTests\n")),(0,r.kt)("p",null,"After the build, you should find the following tarballs, zip files, and the connectors directory with all the Pulsar IO nar files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distribution/server/target/apache-pulsar-2.X.0-bin.tar.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target/apache-pulsar-2.X.0-src.tar.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distribution/offloaders/target/apache-pulsar-offloaders-2.X.0-bin.tar.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distribution/shell/target/apache-pulsar-shell-2.X.0-bin.tar.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distribution/shell/target/apache-pulsar-shell-2.X.0-bin.zip")),(0,r.kt)("li",{parentName:"ul"},"directory ",(0,r.kt)("inlineCode",{parentName:"li"},"distribution/io/target/apache-pulsar-io-connectors-2.X.0-bin"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"apache-pulsar-shell")," artifacts are distributed beginning with release 2.11.0.")),(0,r.kt)("h3",{id:"inspect-the-artifacts"},"Inspect the artifacts"),(0,r.kt)("p",null,"First, check that the ",(0,r.kt)("inlineCode",{parentName:"p"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTICE")," files cover all included jars for the bin package. You can use script to cross-validate ",(0,r.kt)("inlineCode",{parentName:"p"},"LICENSE")," file with included jars:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"src/check-binary-license.sh distribution/server/target/apache-pulsar-2.X.0-bin.tar.gz\n")),(0,r.kt)("p",null,"Then, run Apache RAT to verify the license headers in the src package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xvzf target/apache-pulsar-2.X.0-src.tar.gz\ncd apache-pulsar-2.X.0-src\nmvn apache-rat:check\n")),(0,r.kt)("p",null,"Finally, use instructions in ",(0,r.kt)("a",{parentName:"p",href:"/contribute/validate-release-candidate"},"verifying release candidates")," page to do some sanity checks on the produced binary distributions."),(0,r.kt)("h3",{id:"sign-and-stage-the-artifacts-on-svn"},"Sign and stage the artifacts on SVN"),(0,r.kt)("p",null,"The src and bin artifacts need to be signed and uploaded to the dist SVN repository for staging."),(0,r.kt)("p",null,"Before running the script, make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"<yourname>@apache.org")," code signing key is the default gpg signing key."),(0,r.kt)("p",null,"One way to ensure this is to create/edit file ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.gnupg/gpg.conf")," and add a line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"default-key <key fingerprint>\n")),(0,r.kt)("p",null,"... where ",(0,r.kt)("inlineCode",{parentName:"p"},"<key fingerprint>")," should be replaced with the private key fingerprint for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<yourname>@apache.org")," key. The key fingerprint can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg -K")," output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/pulsar pulsar-dist-dev\ncd pulsar-dist-dev\n\n# '-candidate-1' needs to be incremented in case of multiple iteration in getting\n#    to the final release)\nsvn mkdir pulsar-2.X.0-candidate-1\n\ncd pulsar-2.X.0-candidate-1\n$PULSAR_PATH/src/stage-release.sh .\n\n# Verify the artifacts are correctly signed have correct checksums:\n( for i in **/*.(tar.gz|zip|nar); do echo $i; gpg --verify $i.asc $i || exit 1 ; done )\n( for i in **/*.(tar.gz|zip|nar); do echo $i; shasum -a 512 -c $i.sha512 || exit 1 ; done )\n\n# Please check the size of the files in the `pulsar-2.X.0-candidate-1`.\n# If you build the artifacts without a clean workspace, the `apache-pulsar-2.X.0-src.tar.gz` files\n# may be too large to be unable to upload.\nsvn add *\nsvn ci -m 'Staging artifacts and signature for Pulsar release 2.X.0'\n")),(0,r.kt)("h3",{id:"stage-maven-modules"},"Stage Maven modules"),(0,r.kt)("p",null,"Upload the artifacts to ASF Nexus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $PULSAR_PATH\nrm -rf apache-pulsar-2.X.0-src\n\nexport APACHE_USER=$USER\nexport APACHE_PASSWORD=$MY_PASSWORD\nexport GPG_TTY=$(tty)\n# src/settings.xml from master branch to /tmp/mvn-apache-settings.xml since it's missing in some branches\ncurl -s -o /tmp/mvn-apache-settings.xml https://raw.githubusercontent.com/apache/pulsar/master/src/settings.xml\n# publish artifacts\nmvn deploy -DskipTests -Papache-release --settings /tmp/mvn-apache-settings.xml\n# publish org.apache.pulsar.tests:integration and it's parent pom org.apache.pulsar.tests:tests-parent\nmvn deploy -DskipTests -Papache-release --settings /tmp/mvn-apache-settings.xml -f tests/pom.xml -pl org.apache.pulsar.tests:tests-parent,org.apache.pulsar.tests:integration\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GPG_TTY"),' environment variable must be set for all the following steps. Otherwise, some operations might fail by "gpg failed to sign the data".')),(0,r.kt)("p",null,"This will ask for the GPG key passphrase and then upload it to the staging repository."),(0,r.kt)("p",null,"Log in to the ASF Nexus repository at ",(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org"},"https://repository.apache.org")),(0,r.kt)("p",null,'Click on "Staging Repositories" on the left sidebar and then select the current Pulsar staging repo. This should be called something like ',(0,r.kt)("inlineCode",{parentName:"p"},"orgapachepulsar-XYZ"),"."),(0,r.kt)("p",null,'Use the "Close" button to close the repository. This operation will take few minutes. Once complete click "Refresh" and now a link to the staging repository should be available, something like ',(0,r.kt)("a",{parentName:"p",href:"https://repository.apache.org/content/repositories/orgapachepulsar-XYZ"},"https://repository.apache.org/content/repositories/orgapachepulsar-XYZ")),(0,r.kt)("h3",{id:"stage-docker-images"},"Stage Docker images"),(0,r.kt)("p",null,"Run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $PULSAR_HOME/docker\n./build.sh\nDOCKER_USER=<your-username> DOCKER_PASSWORD=<your-password> DOCKER_ORG=<your-username> ./publish.sh\n")),(0,r.kt)("p",null,"After that, the following images will be built and pushed to your own DockerHub account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pulsar"),(0,r.kt)("li",{parentName:"ul"},"pulsar-all")),(0,r.kt)("h2",{id:"vote-for-the-release-candidate"},"Vote for the release candidate"),(0,r.kt)("p",null,"Start a voting thread on the dev mailing list. Here is a sample content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"To: dev@pulsar.apache.org\nSubject: [VOTE] Pulsar Release 2.X.0 Candidate 1\n\nThis is the first release candidate for Apache Pulsar, version 2.X.0.\n\nIt fixes the following issues:\nhttps://github.com/apache/pulsar/milestone/8?closed=1\n\n*** Please download, test and vote on this release. This vote will stay open\nfor at least 72 hours ***\n\nNote that we are voting upon the source (tag), binaries are provided for\nconvenience.\n\nSource and binary files:\nhttps://dist.apache.org/repos/dist/dev/pulsar/pulsar-2.X.0-candidate-1/\n\nSHA-512 checksums:\n028313cbbb24c5647e85a6df58a48d3c560aacc9  apache-pulsar-2.X.0-SNAPSHOT-bin.tar.gz\nf7cc55137281d5257e3c8127e1bc7016408834b1  apache-pulsar-2.x.0-SNAPSHOT-src.tar.gz\n\nMaven staging repo:\nhttps://repository.apache.org/content/repositories/orgapachepulsar-169/\n\nThe tag to be voted upon:\nv2.X.0-candidate-1 (21f4a4cffefaa9391b79d79a7849da9c539af834)\nhttps://github.com/apache/pulsar/releases/tag/v2.X.0-candidate-1\n\nPulsar's KEYS file containing PGP keys you use to sign the release:\nhttps://dist.apache.org/repos/dist/dev/pulsar/KEYS\n\nDocker images:\n\n<link of the pulsar images>\n\n<link of the pulsar-all image>\n\nPlease download the source package, and follow the README to build\nand run the Pulsar standalone service.\n")),(0,r.kt)("p",null,"The vote should be open for at least 72 hours (3 days). Votes from Pulsar PMC members will be considered binding, while anyone else is encouraged to verify the release and vote as well."),(0,r.kt)("p",null,"If the release is approved here with 3 +1 binding votes, you can then proceed to the next step. Otherwise, you should repeat the previous steps and prepare another release candidate to vote."),(0,r.kt)("h2",{id:"promote-the-release"},"Promote the release"),(0,r.kt)("h3",{id:"publish-the-final-tag"},"Publish the final tag"),(0,r.kt)("p",null,"Create and push the final Git tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git tag -u $USER@apache.org v2.X.0 -m 'Release v2.X.0'\ngit push origin v2.X.0\n")),(0,r.kt)("p",null,"Then, you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release"},"create a GitHub release")," based on the tag."),(0,r.kt)("h3",{id:"release-the-artifacts-on-svn"},"Release the artifacts on SVN"),(0,r.kt)("p",null,"Promote the artifacts on the release SVN repo ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release"},"https://dist.apache.org/repos/dist/release"),". Note that this repo is limited to PMC members, You may need a PMC member's help if you are not one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn move -m "Release Apache Pulsar 2.X.Y" \\\n  https://dist.apache.org/repos/dist/dev/pulsar/pulsar-2.X.0-candidate-1 \\\n  https://dist.apache.org/repos/dist/release/pulsar/pulsar-2.X.0\n')),(0,r.kt)("h3",{id:"release-maven-modules"},"Release Maven modules"),(0,r.kt)("p",null,"Promote the Maven staging repository for release. Login to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://repository.apache.org")," and select the staging repository associated with the RC candidate that was approved. The naming will be like ",(0,r.kt)("inlineCode",{parentName:"p"},"orgapachepulsar-XYZ"),'. Select the repository and click on "Release". Artifacts will now be made available on Maven central.'),(0,r.kt)("h3",{id:"release-docker-images"},"Release Docker images"),(0,r.kt)("p",null,"Copy the approved candidate docker images from your personal account to apachepulsar org."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PULSAR_VERSION=2.x.x\nOTHER_DOCKER_USER=otheruser\nfor image in pulsar pulsar-all pulsar-grafana pulsar-standalone; do\n    docker pull "${OTHER_DOCKER_USER}/$image:${PULSAR_VERSION}" && {\n      docker tag "${OTHER_DOCKER_USER}/$image:${PULSAR_VERSION}" "apachepulsar/$image:${PULSAR_VERSION}"\n      echo "Pushing apachepulsar/$image:${PULSAR_VERSION}"\n      docker push "apachepulsar/$image:${PULSAR_VERSION}"\n    }\ndone\n')),(0,r.kt)("p",null,"If you don't have the permission, you can ask someone with access to apachepulsar org to do that."),(0,r.kt)("h3",{id:"release-helm-chart"},"Release Helm Chart"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This step is for the latest release only.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bump the image version in the Helm Chart: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/charts/pulsar/values.yaml"},"charts/pulsar/values.yaml")),(0,r.kt)("li",{parentName:"ol"},"Bump the chart version and ",(0,r.kt)("inlineCode",{parentName:"li"},"appVersion")," in the Helm Chart to the released version: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/charts/pulsar/Chart.yaml"},"charts/pulsar/Chart.yaml")),(0,r.kt)("li",{parentName:"ol"},"Send a pull request for reviews and get it merged."),(0,r.kt)("li",{parentName:"ol"},"Once it is merged, the chart will be automatically released to GitHub releases at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart"},"https://github.com/apache/pulsar-helm-chart")," and updated to ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/charts/index.yaml"},"https://pulsar.apache.org/charts/index.yaml"),".")),(0,r.kt)("h3",{id:"release-homebrew-libpulsar-package"},"Release Homebrew libpulsar package"),(0,r.kt)("p",null,"For 2.8, 2.9 and 2.10 releases, you should release the libpulsar package on Homebrew."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The C++ client is now developing in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp"},"separated repo"),". You should check its own release guide if you're releasing version >= 3.0.0.")),(0,r.kt)("p",null,"Release a new version of libpulsar for Homebrew, You can follow the example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-core/pull/53514"},"here"),"."),(0,r.kt)("h3",{id:"release-python-client"},"Release Python client"),(0,r.kt)("p",null,"For 2.8, 2.9 and 2.10 releases, you should release the Python client."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"You need to create an account on PyPI: ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/account/register/"},"https://pypi.org/account/register/")),(0,r.kt)("li",{parentName:"ol"},"Ask anyone that has been a release manager before to add you as a maintainer for pulsar-docker on PyPI"),(0,r.kt)("li",{parentName:"ol"},"Once you have completed the following steps in this section, you can check if the wheels are uploaded successfully in ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/pulsar-client/#files"},"Download files"),". Remember to switch to the correct version in ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/pulsar-client/#history"},"Release history"),"."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you run following command at the release tag!")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Python client is now developing in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python"},"separated repo"),". You should check its own release guide if you're releasing version >= 3.0.0.")),(0,r.kt)("h4",{id:"linux"},"Linux"),(0,r.kt)("p",null,"There is a script that builds and packages the Python client inside Docker images:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-client-cpp/docker/build-wheels.sh\n")),(0,r.kt)("p",null,"The wheel files will be left under ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/python/wheelhouse"),". Make sure all the files have ",(0,r.kt)("inlineCode",{parentName:"p"},"manylinux")," in the filenames. Otherwise, those files will not be able to upload to PyPI."),(0,r.kt)("p",null,"Run the following command to push the built wheel files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd pulsar-client-cpp/python/wheelhouse\npip install twine\ntwine upload pulsar_client-*.whl\n")),(0,r.kt)("h4",{id:"macos"},"macOS"),(0,r.kt)("p",null,"There is a script that builds and packages the Python client inside Docker images:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-client-cpp/python/build-mac-wheels.sh\n")),(0,r.kt)("p",null,"The wheel files will be generated at each platform directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/python/pkg/osx/"),". Then you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"twin upload")," to upload those wheel files."),(0,r.kt)("h2",{id:"update-the-document"},"Update the document"),(0,r.kt)("h3",{id:"release-notes"},"Release notes"),(0,r.kt)("p",null,"This step is for every release. Read the specific guide for ",(0,r.kt)("a",{parentName:"p",href:"/contribute/release-note-guide"},"writing release notes"),"."),(0,r.kt)("h3",{id:"swagger-files"},"Swagger files"),(0,r.kt)("p",null,"This step is for every release."),(0,r.kt)("p",null,"First, build swagger files from apache/pulsar repo at the released tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn -ntp install -Pcore-modules,swagger,-main -DskipTests -DskipSourceReleaseAssembly=true -Dspotbugs.skip=true -Dlicense.skip=true\n")),(0,r.kt)("p",null,"Now, run the following script from the main branch of apache/pulsar-site repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd tools/pytools\npoetry install\npoetry run bin/rest-apidoc-generator.py --master-path=/path/to/pulsar-2.X.Y --version=2.X.Y\n")),(0,r.kt)("p",null,"Read more on the manual of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/tools/pytools/README.md"},"pytools"),"."),(0,r.kt)("h3",{id:"javadoc"},"Javadoc"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This step is for feature releases only, unless you're sure that significant Javadoc fixes are made against the patch release.")),(0,r.kt)("p",null,"After publish Java libraries, run the following script from the main branch of apache/pulsar-site repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd tools/pytools\npoetry install\npoetry run bin/java-apidoc-generator.py 2.X.0\n")),(0,r.kt)("p",null,"Once the docs are generated, you can add them and submit them in a PR. The expected doc output is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static/api/admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static/api/client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static/api/pulsar-functions"))),(0,r.kt)("p",null,"Read more on the manual of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/tools/pytools/README.md"},"pytools"),"."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This step is for feature releases only, unless you're sure that significant reference fixes are made against the patch release.")),(0,r.kt)("p",null,"You can generate references of config and command-line tool by running the following script from the main branch of apache/pulsar-site repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# build Pulsar distributions under /path/to/pulsar-2.X.0\ncd tools/pytools\npoetry install\npoetry run bin/reference-doc-generator.py --master-path=/path/to/pulsar-2.X.0 --version=2.X.0\n")),(0,r.kt)("p",null,"Once the docs are generated, you can add them and submit them in a PR. The expected doc output is ",(0,r.kt)("inlineCode",{parentName:"p"},"static/reference/2.X.x")),(0,r.kt)("p",null,"Read more on the manual of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/tools/pytools/README.md"},"pytools"),"."),(0,r.kt)("h2",{id:"update-the-site"},"Update the site"),(0,r.kt)("p",null,"Clone the apache/site repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/pulsar-site.git\n")),(0,r.kt)("p",null,"Create a new branch from the main branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b doc_release_<release-version>\n")),(0,r.kt)("p",null,"For every release, you should add a ",(0,r.kt)("inlineCode",{parentName:"p"},"<release-version>")," entry to the corresponding place in the ",(0,r.kt)("inlineCode",{parentName:"p"},"releases.json")," file."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The following steps are for feature releases only.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate a new version of the documentation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\nyarn run version <release-version>\n")),(0,r.kt)("p",null,"After you run this command, a new folder ",(0,r.kt)("inlineCode",{parentName:"p"},"version-<release-version>")," is added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs")," directory, a new sidebar file ",(0,r.kt)("inlineCode",{parentName:"p"},"version-<release-version>-sidebars.json")," is added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_sidebars")," directory, and the new version is added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," file."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can move the latest version under the old version in the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," file. Make sure the Algolia index works before moving 2.X.0 as the current stable.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send out a PR request for review. After your PR is approved and merged to main, the website is published automatically after the new website is built. The website is built every 6 hours.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the new website after the website is built. Open ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"https://pulsar.apache.org")," in your browsers to verify all the changes are alive. If the website build succeeds but the website is not updated, you can try to sync the git repository. Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://selfserve.apache.org/"},"https://selfserve.apache.org/"),' and click the "Synchronize Git Repositories" and then select apache/pulsar-site.'))),(0,r.kt)("h2",{id:"announce-the-release"},"Announce the release"),(0,r.kt)("p",null,"Once the release artifacts are available in the Apache Mirrors and the website is updated, you need to announce the release. You should email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org"),", ",(0,r.kt)("a",{parentName:"p",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org"),", and ",(0,r.kt)("a",{parentName:"p",href:"mailto:announce@apache.org."},"announce@apache.org.")," Here is a sample content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"To: dev@pulsar.apache.org, users@pulsar.apache.org, announce@apache.org\nSubject: [ANNOUNCE] Apache Pulsar 2.X.0 released\n\nThe Apache Pulsar team is proud to announce Apache Pulsar version 2.X.0.\n\nPulsar is a highly scalable, low latency messaging platform running on\ncommodity hardware. It provides simple pub-sub semantics over topics,\nguaranteed at-least-once delivery of messages, automatic cursor management for\nsubscribers, and cross-datacenter replication.\n\nFor Pulsar release details and downloads, visit:\n\nhttps://pulsar.apache.org/download\n\nRelease Notes are at:\nhttps://pulsar.apache.org/release-notes\n\nWe would like to thank the contributors that made the release possible.\n\nRegards,\n\nThe Pulsar Team\n")),(0,r.kt)("p",null,"Send the email in plain text mode since the ",(0,r.kt)("a",{parentName:"p",href:"mailto:announce@apache.org"},"announce@apache.org")," mailing list will reject messages with text/html content."),(0,r.kt)("p",null,'In Gmail, there\'s an option to set "Plain text mode" in the "\u22ee" menu.'),(0,r.kt)("h2",{id:"write-a-blog-post-optional"},"Write a blog post (optional)"),(0,r.kt)("p",null,"It is encouraged to write a blog post to summarize the features introduced in this release, especially for feature releases."),(0,r.kt)("p",null,"You can follow the example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/2308"},"here"),". Be aware that the source of blog is moved to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/blog"},"here"),"."),(0,r.kt)("h2",{id:"remove-old-releases"},"Remove old releases"),(0,r.kt)("p",null,"Remove the old releases (if any). You only need the latest release there, and older releases are available through the Apache archive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Get the list of releases\nsvn ls https://dist.apache.org/repos/dist/release/pulsar\n\n# Delete each release (except for the last one)\nsvn rm https://dist.apache.org/repos/dist/release/pulsar/pulsar-2.Y.0\n")),(0,r.kt)("h2",{id:"move-master-branch-to-next-version"},"Move master branch to next version"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This step is for feature releases only.")),(0,r.kt)("p",null,"You need to move the master version to the next iteration ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," (",(0,r.kt)("inlineCode",{parentName:"p"},"X + 1"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\n./src/set-project-version.sh 2.Y.0-SNAPSHOT\ngit commit -a -s -m \"[cleanup][build] Bumped version to 2.Y.0-SNAPSHOT'\n")),(0,r.kt)("p",null,"Since this needs to be merged into ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),", you need to follow the regular process and create a Pull Request on GitHub."))}u.isMDXComponent=!0}}]);