line=0
window.onload=function(){
    try{app}catch(e){
        console.error("You are missing required App configurations, please see the github repository.")
        console.warn("https://github.com/BartenderWinery/HTML-CMD")}}
var CMD=new Map([//fix wrapping and add auto scrolling
    ["assoc",["GUI.compile(['?:\>[]',::,''])",["'.386=vxdfile'","'.3g2=WMP11.AssocFile.3G2'","'.3gp=WMP11.AssocFile.3GP'","'.3gp2=WMP11.AssocFile.3G2'","'.3gpp=WMP11.AssocFile.3GP'","'.AAC=WMP11.AssocFile.ADTS'","'.accountpicture-ms=accountpicturefile.ADT=WMP11.AssocFile.ADTS'","'.ADTS=WMP11.AssocFile.ADTS'","'.aif=WMP11.AssocFile.AIFF'","'.aifc=WMP11.AssocFile.AIFF'","'.aiff=WMP11.AssocFile.AIFF'","'.ani=anifile.appcontent-ms=ApplicationContent.application=Application.Manifest.appref-ms=Application.Reference'","'.asa=aspfile.asf=WMP11.AssocFile.ASF'","'.asp=aspfile.asx=WMP11.AssocFile.ASX'","'.au=WMP11.AssocFile.AU'","'.avi=WMP11.AssocFile.AVI'","'.bat=batfile.blg=Diagnostic.Perfmon.Document'","'.bmp=Paint.Picture.bsc=VisualStudio.bsc.7517ba98'","'.cab=CABFolder.camp=campfile.cat=CATFile.cda=WMP11.AssocFile.CDA'","'.cdmp=cdmpfile.cdx=aspfile.cdxml=Microsoft.PowerShellCmdletDefinitionXML.1'","'.cer=CERFile.chk=chkfile.chm=chm.file.cmd=cmdfile.com=comfile.compositefont=Windows.CompositeFont.cpl=cplfile.crl=CRLFile.crt=CERFile.csproj=VisualStudio.Launcher.csproj.15.0'","'.css=CSSfile.cur=curfile.datasource=VisualStudio.datasource.7517ba98'","'.db=dbfile.dctx=IMEDictionaryCompiler.dctxc=IMEDictionaryCompiler.dds=ddsfile.der=CERFile.desklink=CLSID\{9E56BE61-C50F-11CF-9A2C-00A0C90A90CE}'","'.deskthemepack=desktopthemepackfile.diagcab=Diagnostic.Cabinet.diagcfg=Diagnostic.Config.diagpkg=Diagnostic.Document.dib=Paint.Picture.dll=dllfile.docx=docxfile.drv=drvfile.dsn=MSDASQL.emf=emffile.eml=Microsoft Email Message'","'.etl=wpa.etl_file.evt=evtfile.evtx=evtxfile.exe=exefile.exp=VisualStudio.exp.7517ba98'","'.flac=WMP11.AssocFile.FLAC'","'.fon=fonfile.gif=giffile.gmmp=gmmpfile.grp=MSProgramGroup.hlp=hlpfile.hta=htafile.htm=htmlfile.html=htmlfile.icc=icmfile.icl=IconLibraryFile.icm=icmfile.ico=icofile.idb=VisualStudio.idb.7517ba98'","'.igp=Intel.GraphicsControlPanel.igp.1'","'.ilk=VisualStudio.ilk.7517ba98'","'.imesx=imesxfile.img=Windows.IsoFile.inf=inffile.ini=inifile.iso=Windows.IsoFile.jar=MicrosoftOpenJDK.jarfile.jfif=pjpegfile.Job=JobObject.jod=Microsoft.Jet.OLEDB.4.0'","'.jpe=jpegfile.jpeg=jpegfile.jpg=jpegfile.js=JSFile.JSE=JSEFile.jxr=wdpfile.label=Label.lib=VisualStudio.lib.7517ba98'","'.library-ms=LibraryFolder.lic=VisualStudio.lic.7517ba98'","'.lnk=lnkfile.log=txtfile.m1v=WMP11.AssocFile.MPEG'","'.M2T=WMP11.AssocFile.M2TS'","'.M2TS=WMP11.AssocFile.M2TS'","'.M2V=WMP11.AssocFile.MPEG'","'.m3u=WMP11.AssocFile.m3u'","'.m4a=WMP11.AssocFile.M4A'","'.m4v=WMP11.AssocFile.MP4'","'.mapimail=CLSID\\{9E56BE60-C50F-11CF-9A2C-00A0C90A90CE}'","'.mht=mhtmlfile.mhtml=mhtmlfile.mid=WMP11.AssocFile.MIDI'","'.midi=WMP11.AssocFile.MIDI'","'.mk3d=WMP11.AssocFile.MK3D'","'.mka=WMP11.AssocFile.MKA'","'.mkv=WMP11.AssocFile.MKV'","'.mlc=LpkSetup.1.MOD=WMP11.AssocFile.MPEG'","'.mov=WMP11.AssocFile.MOV'","'.mp2=WMP11.AssocFile.MP3'","'.mp2v=WMP11.AssocFile.MPEG'","'.mp3=WMP11.AssocFile.MP3'","'.mp4=WMP11.AssocFile.MP4'","'.mp4v=WMP11.AssocFile.MP4'","'.mpa=WMP11.AssocFile.MPEG'","'.mpe=WMP11.AssocFile.MPEG'","'.mpeg=WMP11.AssocFile.MPEG'","'.mpg=WMP11.AssocFile.MPEG'","'.mpv2=WMP11.AssocFile.MPEG'","'.ms-windows-store-license=WindowsStore.License'","'.msc=MSCFile.msi=Msi.Package.msp=Msi.Patch.msrcincident=RemoteAssistance.1.msstyles=msstylesfile.msu=Microsoft.System.Update.1'","'.MTS=WMP11.AssocFile.M2TS'","'.mydocs=CLSID\\{ECF03A32-103D-11d2-854D-006008059367}'","'.ncb=VisualStudio.ncb.7517ba98'","'.nfo=MSInfoFile.ocx=ocxfile.odt=odtfile.opk=OPK_File.osdx=opensearchdescription.otf=otffile.p10=P10File.p12=PFXFile.p7b=SPCFile.p7c=certificate_wab_auto_file.p7m=P7MFile.p7r=P7RFile.p7s=P7SFile.pal=VisualStudio.pal.7517ba98'","'.partial=IE.AssocFile.PARTIAL'","'.pbk=pbkfile.pch=VisualStudio.pch.7517ba98'","'.pdb=VisualStudio.pdb.7517ba98'","'.perfmoncfg=Diagnostic.Perfmon.Config'","'.pfm=pfmfile.pfx=PFXFile.pif=piffile.pko=PKOFile.pnf=pnffile.png=pngfile.ppkg=Microsoft.ProvTool.Provisioning.1'","'.prf=prffile.ps1=Microsoft.PowerShellScript.1'","'.ps1xml=Microsoft.PowerShellXMLData.1'","'.psc1=Microsoft.PowerShellConsole.1'","'.psd1=Microsoft.PowerShellData.1'","'.psm1=Microsoft.PowerShellModule.1'","'.pssc=Microsoft.PowerShellSessionConfiguration.1'","'.py=Python.File.pyc=Python.CompiledFile.pyd=Python.Extension.pyo=Python.CompiledFile.pyw=Python.NoConFile.pyz=Python.ArchiveFile.pyzw=Python.NoConArchiveFile.qds=SavedDsQuery.rat=ratfile.RDP=RDP.File.reg=regfile.resmoncfg=Diagnostic.Resmon.Config'","'.resw=VisualStudio.resw.7517ba98'","'.resx=VisualStudio.resx.7517ba98'","'.rle=rlefile.rll=dllfile.rmi=WMP11.AssocFile.MIDI'","'.rtf=rtffile.sbr=VisualStudio.sbr.7517ba98'","'.scf=SHCmdFile.scp=txtfile.scr=scrfile.sct=scriptletfile.search-ms=SearchFolder.searchConnector-ms=SearchConnectorFolder.settingcontent-ms=SettingContent.settings=VisualStudio.settings.7517ba98'","'.sfcache=RDBFileProperties.1.shproj=VisualStudio.Launcher.shproj.15.0'","'.sln=VisualStudio.Launcher.sln'","'.slnf=VisualStudio.Launcher.slnf'","'.snd=WMP11.AssocFile.AU'","'.snk=VisualStudio.snk.7517ba98'","'.spc=SPCFile.sst=CertificateStoreFile.stvproj=VisualStudio.StvProj.10'","'.suo=VisualStudio.Launcher.suo'","'.svclog=VisualStudio.SvcLog.10'","'.svg=svgfile.symlink=.symlink.sys=sysfile.theme=themefile.themepack=themepackfile.tif=TIFImage.Document.tiff=TIFImage.Document.TS=WMP11.AssocFile.TTS'","'.ttc=ttcfile.ttf=ttffile.TTS=WMP11.AssocFile.TTS'","'.txt=txtfile.UDL=MSDASC.unity=Unity.2021.3.0f1.unity'","'.unityhub=Unity Hub editor install metadata file'","'.unityPackage=Unity.2021.3.0f1.unityPackage'","'.URL=InternetShortcut.user=VisualStudio.user.7517ba98'","'.VBE=VBEFile.vbproj=VisualStudio.Launcher.vbproj.15.0'","'.vbs=VBSFile.vhdpmem=Windows.VhdPmemFile.vhdx=Windows.VhdFile.vsix=VisualStudio.Launcher.vsix'","'.vspscc=VisualStudio.vspscc.7517ba98'","'.vsscc=VisualStudio.vsscc.7517ba98'","'.vssettings=VisualStudio.vssettings.7517ba98'","'.vssscc=VisualStudio.vssscc.7517ba98'","'.vsz=VisualStudio.vsz.7517ba98'","'.vxd=vxdfile.wab=wab_auto_file.wav=WMP11.AssocFile.WAV'","'.wax=WMP11.AssocFile.WAX'","'.wbcat=wbcatfile.wcx=wcxfile.wdp=wdpfile.webpnp=webpnpFile.website=Microsoft.Website.wm=WMP11.AssocFile.ASF'","'.wma=WMP11.AssocFile.WMA'","'.WMD=WMP11.AssocFile.WMD'","'.wmdb=WMP.WMDBFile.wmf=wmffile.WMS=WMP11.AssocFile.WMS'","'.wmv=WMP11.AssocFile.WMV'","'.wmx=WMP11.AssocFile.ASX'","'.wmz=WMP11.AssocFile.WMZ'","'.wpa=wpa.wpa_file.wpapk=wpa.wpapk_file.wpl=WMP11.AssocFile.WPL'","'.wsc=scriptletfile.WSF=WSFFile.WSH=WSHFile.wtx=txtfile.wvx=WMP11.AssocFile.WVX'","'.xaml=Windows.XamlDocument.xbap=Windows.Xbap.xht=xhtmlfile.xhtml=xhtmlfile.xml=xmlfile.xrm-ms=MSSppLicenseFile.xsc=VisualStudio.xsc.7517ba98'","'.xsl=xslfile.xss=VisualStudio.xss.7517ba98'","'.ZFSendToTarget=CLSID\\{888DCA60-FC0A-11CF-8F0F-00C04FD7D062}'","'.zip=CompressedFolder._bsln140=VisualStudio.Launcher._bsln140'","'._bsln150=VisualStudio.Launcher._bsln150'","'._sln=VisualStudio.Launcher._sln'","'._sln100=VisualStudio.Launcher._sln100'","'._sln110=VisualStudio.Launcher._sln110'","'._sln120=VisualStudio.Launcher._sln120'","'._sln140=VisualStudio.Launcher._sln140'","'._sln150=VisualStudio.Launcher._sln150'","'._sln160=VisualStudio.Launcher._sln160'","'._sln170=VisualStudio.Launcher._sln170'","'._sln60=VisualStudio.Launcher._sln60'","'._sln70=VisualStudio.Launcher._sln70'","'._sln71=VisualStudio.Launcher._sln71'","'._sln80=VisualStudio.Launcher._sln80'","'._sln90=VisualStudio.Launcher._sln90'","'._vbxsln100=VisualStudio.Launcher._vbxsln100'","'._vbxsln110=VisualStudio.Launcher._vbxsln110'","'._vbxsln80=VisualStudio.Launcher._vbxsln80'","'._vbxsln90=VisualStudio.Launcher._vbxsln90'","'._vcppxsln100=VisualStudio.Launcher._vcppxsln100'","'._vcppxsln110=VisualStudio.Launcher._vcppxsln110'","'._vcppxsln80=VisualStudio.Launcher._vcppxsln80'","'._vcppxsln90=VisualStudio.Launcher._vcppxsln90'","'._vcsxsln100=VisualStudio.Launcher._vcsxsln100'","'._vcsxsln110=VisualStudio.Launcher._vcsxsln110'","'._vcsxsln80=VisualStudio.Launcher._vcsxsln80'","'._vcsxsln90=VisualStudio.Launcher._vcsxsln90'","'._vjsxsln80=VisualStudio.Launcher._vjsxsln80'","'._vw8xsln110=VisualStudio.Launcher._vw8xsln110'","'._vwdxsln100=VisualStudio.Launcher._vwdxsln100'","'._vwdxsln110=VisualStudio.Launcher._vwdxsln110'","'._vwdxsln120=VisualStudio.Launcher._vwdxsln120'","'._vwdxsln140=VisualStudio.Launcher._vwdxsln140'","'._vwdxsln150=VisualStudio.Launcher._vwdxsln150'","'._vwdxsln80=VisualStudio.Launcher._vwdxsln80'","'._vwdxsln90=VisualStudio.Launcher._vwdxsln90'","'._vwinxsln120=VisualStudio.Launcher._vwinxsln120'","'._vwinxsln140=VisualStudio.Launcher._vwinxsln140'","'._vwinxsln150=VisualStudio.Launcher._vwinxsln150'","'._wdxsln110=VisualStudio.Launcher._wdxsln110'","'._wdxsln120=VisualStudio.Launcher._wdxsln120'","'._wdxsln140=VisualStudio.Launcher._wdxsln140'","'._wdxsln150=VisualStudio.Launcher._wdxsln150'"]]],
    ["attrib",["GUI.compile(['?:\>function not complete','']);"]],
    ["break",["GUI.compile(['?:\>[]',''])"]],
    ["bcdedit",["GUI.compile(['?:\>[]',::,''])"],["'The boot configuration data store could not be opened.'","'Access is denied'"]],
    ["cacls",["GUI.compile(['?:\>[]','::','']);","Deprecated, skipping until major development."]],
    ["call",["GUI.compile(['?:\>[]','::','']);",""]], //call function threatened, currently just echos
    ["cd",["GUI.compile(['?:\>[]','::','']);","?:\>"]],
    ["chcp",["GUI.compile(['?:\>[]','ACtive code page: 437','']);"]], //not actually sure what this does
    ["chdir",["GUI.compile(['?:\>[]','::','']);","?:\>"]],
    ["chkdsk",["GUI.compile(['?:\>[]',::,'']);",["'Access Denied as you do not have sufficient privileges or'","'the disk may be locked by another process.'","'You have to invoke this utility running in elevated mode'","'and make sure the disk is unlocked.'"]]],
    ["chkntfs",["GUI.compile(['?:\>[]','::','']);","You must specify at least one drive name."]],
    ["cls",["GUI.clear(document.body);"]],
    ["cmd",["open(window.location.href)","open(window.location.href)"]], //Add url commands for cmd functions, of course that poses a security issue, but i'll figure something out probably via confirming cookies
    ["color",["GUI.compile(['?:\>[]','Not completed.','']);",""]], //add coloring
    //below is out of order
    ["help",["GUI.compile(['?:\>[]',::,''])",["'For more information on a specific command, type HELP command-name'","'ASSOC          Displays or modifies file extension associations.'","'ATTRIB         Displays or changes file attributes.'","'BREAK          Sets or clears extended CTRL+C checking.'","'BCDEDIT        Sets properties in boot database to control boot loading.'","'CACLS          Displays or modifies access control lists (ACLs) of files.'","'CALL           Calls one batch program from another.'","'CD             Displays the name of or changes the current directory.'","'CHCP           Displays or sets the active code page number.'","'CHDIR          Displays the name of or changes the current directory.'","'CHKDSK         Checks a disk and displays a status report.'","'CHKNTFS        Displays or modifies the checking of disk at boot time.'","'CLS            Clears the screen.'","'CMD            Starts a new instance of the Windows command interpreter.'","'COLOR          Sets the default console foreground and background colors.'","'COMP           Compares the contents of two files or sets of files.'","'COMPACT        Displays or alters the compression of files on NTFS partitions.'","'CONVERT        Converts FAT volumes to NTFS.  You cannot convert the'","'               current drive.'","'COPY           Copies one or more files to another location.'","'DATE           Displays or sets the date.'","'DEL            Deletes one or more files.'","'DIR            Displays a list of files and subdirectories in a directory.'","'DISKPART       Displays or configures Disk Partition properties.'","'DOSKEY         Edits command lines, recalls Windows commands, and'","'               creates macros.'","'DRIVERQUERY    Displays current device driver status and properties.'","'ECHO           Displays messages, or turns command echoing on or off.'","'ENDLOCAL       Ends localization of environment changes in a batch file.'","'ERASE          Deletes one or more files.'","'EXIT           Quits the CMD.EXE program (command interpreter).'","'FC             Compares two files or sets of files, and displays the'","'               differences between them.'","'FIND           Searches for a text string in a file or files.'","'FINDSTR        Searches for strings in files.'","'FOR            Runs a specified command for each file in a set of files.'","'FORMAT         Formats a disk for use with Windows.'","'FSUTIL         Displays or configures the file system properties.'","'FTYPE          Displays or modifies file types used in file extension'","'               associations.'","'GOTO           Directs the Windows command interpreter to a labeled line in'","'               a batch program.'","'GPRESULT       Displays Group Policy information for machine or user.'","'GRAFTABL       Enables Windows to display an extended character set in'","'               graphics mode.'","'HELP           Provides Help information for Windows commands.'","'ICACLS         Display, modify, backup, or restore ACLs for files and'","'               directories.'","'IF             Performs conditional processing in batch programs.'","'LABEL          Creates, changes, or deletes the volume label of a disk.'","'MD             Creates a directory.'","'MKDIR          Creates a directory.'","'MKLINK         Creates Symbolic Links and Hard Links'","'MODE           Configures a system device.'","'MORE           Displays output one screen at a time.'","'MOVE           Moves one or more files from one directory to another'","'               directory.'","'OPENFILES      Displays files opened by remote users for a file share.'","'PATH           Displays or sets a search path for executable files.'","'PAUSE          Suspends processing of a batch file and displays a message.'","'POPD           Restores the previous value of the current directory saved by'","'               PUSHD.'","'PRINT          Prints a text file.'","'PROMPT         Changes the Windows command prompt.'","'PUSHD          Saves the current directory then changes it.'","'RD             Removes a directory.'","'RECOVER        Recovers readable information from a bad or defective disk.'","'REM            Records comments (remarks) in batch files or CONFIG.SYS.'","'REN            Renames a file or files.'","'RENAME         Renames a file or files.'","'REPLACE        Replaces files.'","'RMDIR          Removes a directory.'","'ROBOCOPY       Advanced utility to copy files and directory trees'","'SET            Displays, sets, or removes Windows environment variables.'","'SETLOCAL       Begins localization of environment changes in a batch file.'","'SC             Displays or configures services (background processes).'","'SCHTASKS       Schedules commands and programs to run on a computer.'","'SHIFT          Shifts the position of replaceable parameters in batch files.'","'SHUTDOWN       Allows proper local or remote shutdown of machine.'","'SORT           Sorts input.'","'START          Starts a separate window to run a specified program or command.'","'SUBST          Associates a path with a drive letter.'","'SYSTEMINFO     Displays machine specific properties and configuration.'","'TASKLIST       Displays all currently running tasks including services.'","'TASKKILL       Kill or stop a running process or application.'","'TIME           Displays or sets the system time.'","'TITLE          Sets the window title for a CMD.EXE session.'","'TREE           Graphically displays the directory structure of a drive or'","'               path.'","'TYPE           Displays the contents of a text file.'","'VER            Displays the Windows version.'","'VERIFY         Tells Windows whether to verify that your files are written'","'               correctly to a disk.'","'VOL            Displays a disk volume label and serial number.'","'XCOPY          Copies files and directory trees.'","'WMIC           Displays WMI information inside interactive command shell.'","'For more information on tools see the command-line reference in the online help.'"]]],
    ["exit",["window.location.reload();"]],
    ["echo",["GUI.compile(['?:\>[]','::','']);","ECHO is on."]],
    ["dir",["GUI.compile(['?:\>function not complete','']);"]],
    ["",["GUI.compile(['?:\\>'])"]]])
GUI = {
    clear:function(e){
        while(e.children.length-5){e.children[i].remove()}
        e.children[e.children.length-5].value=""},
    compile:function(data){
        for(i=0;i<data.length;i++){
            line++; function insert(data){app.terminal.insertAdjacentHTML("beforeBegin",data)}
            if(data[i])insert("<p style='color:rgb(204,204,204);margin:0px;font-family:consolas;white-space: pre' id='"+line+"'>"+data[i]+"</p>")
            else insert("<p style='color:rgb(204,204,204);margin:0px;height:10px' id='"+line+"''></p>")}}}
interpret = {
    eval:function(data){
        lines=data[0]==" "?data.toLowerCase().replace(" ","").split(/[\n,;]+/):data.toLowerCase().split(/[\n,;]+/) //could probably improve this
        for(i=0; i<lines.length; i++){
            if(!CMD.has(lines[i].split(/ /)[0])||"1234567890-=[]\\;',./`~!@#$%^&*()_+{}|\":?><".split("").some(_i => lines[i][0]==_i)){//needs optimizing
                GUI.compile(["?:\>"+lines[i]+"","'"+lines[i].split(" ")[0]+"' is not recoginized as an internal or external command,","operable program or batch file.",""])
                app.cmd.value=""
                return 0}
            sync = lines[i].split(/ /);  func = CMD.get(sync[0])[0]; eval(func.replace("[]",sync.toString().replace(","," ")).replace("::",sync[1]?sync[1]:CMD.get(data)[1]))
            app.cmd.value=""}
            window.scrollTo(0, app["terminal"].getBoundingClientRect().top-window.innerHeight+app["terminal"].getBoundingClientRect().height)}}
function AddEvent(object, id, func) {
    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object)})
    else if(object.addEventListener) object.addEventListener(id, func, false)}
AddEvent(window,'keydown',function(e){
    switch(e.keyCode){
        case 13:
            e.preventDefault()
            interpret.eval(app.cmd.value)
            break
        default:
            if(e.crtlKey){} //^B here
            break}})