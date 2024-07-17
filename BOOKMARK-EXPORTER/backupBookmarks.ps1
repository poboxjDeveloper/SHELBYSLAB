# Bookmark location for chrome:
# C:\Users\jsc\AppData\Local\Google\Chrome\User Data\
# Current profile: Default directory
# Other profiles: Profile directories

# Default location: "C:\Users\jsc\AppData\Local\Google\Chrome\User Data\Default"
# Other profiles: Profile directories
# use: Copy-Item -> https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/copy-item?view=powershell-7.4

$Directory = Get-Date -Format 'yyyyMMdd-HHmm'
New-Item -Path 'C:\Users\jsc\OneDrive - Euroconsumers sa\## BOOKMARKS\' -Name $Directory -ItemType "directory"
Copy-Item -Path 'C:\Users\jsc\AppData\Local\Google\Chrome\User Data\Default\Bookmarks' -Destination ('C:\Users\jsc\OneDrive - Euroconsumers sa\## BOOKMARKS\'+ $Directory)
