+++
title = "Linux Commands"
hascode = true
date = Date(2019, 3, 22)
rss = "A short description of the page which would serve as **blurb** in a `RSS` feed; you can use basic markdown here but the whole description string must be a single line (not a multiline string). Like this one for instance. Keep in mind that styling is minimal in RSS so for instance don't expect maths or fancy styling to work; images should be ok though: ![](https://upload.wikimedia.org/wikipedia/en/3/32/Rick_and_Morty_opening_credits.jpeg)"

tags = ["syntax", "code"]
+++

# Linux Commands

\toc

## Syncing Files from Computer to Hard Drive

For each directory, I use a specific command:

`~/Academia` directory:
```bash
$ rsync -arv --exclude .git/ --delete /home/parsa/Academia/ Academia
```
The above command excludes `.git` from syncing and also removes any files on
hard drive that were removed from the computer.

`~/Calibre Library` directory:
```bash
$ rsync -arv --delete /home/parsa/Calibre\ Library/ Calibre\ Library

```

`~/Downloads/Documents` directory:
```bash
$ rsync -arv --delete /home/parsa/Downloads/Documents/ Downloads/Documents
```

`~/Apply` directory:
```bash
$ rsync -arv --exclude .git/ --delete /home/parsa/Apply/ Apply
```

`~/Work` directory:
```bash
$ rsync -arv --exclude .git/ --delete /home/parsa/Work/ Work
```

`~/Documents` directory:
```bash
$ rsync -arv --delete /home/parsa/Documents/ Documents
```

`~/Music` directory:
```bash
$ rsync -arv --delete /home/parsa/Music/ Music
```

`~/GitHub` directory:
```bash
$ rsync -arv --exclude .git/ --delete /home/parsa/GitHub/ GitHub
```

`~/Videos` directory:
```bash
$ rsync -arv --delete /home/parsa/Videos/ Videos
```

## Downloading from YouTube

To download the best quality videos from YouTube, I use the following command:
```bash
$ yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 "<video url>" --cookies-from-browser firefox
```

## Interacting with Server via SSH

To connect to server, for example XShellz shell, use this command:
```bash
$ ssh <username>@shell.xshellz.com
```

To run a process and then exit ssh without killing the process, use:
```bash
$ nohup <long-running-process> & exit
```
source: https://unix.stackexchange.com/questions/479/keep-processes-running-after-ssh-session-disconnects

To download a file from server use this:
```bash
$ scp you@shell.xshellz.com:/path/to/homedir/fileToDownload /local/save/path
```
source: https://www.xshellz.com/community/tutorials/48140/How-to-transfer-files-to-and-from-your-shell-account-using-scp

To find the PID of `<long-running-process>`, use this command:
```bash
$ ps -ef | grep "<long-running-process>"
```
and then kill the process:
```bash
$ kill <PID>
```
source: https://stackoverflow.com/questions/17385794/how-to-get-the-process-id-to-kill-a-nohup-process
