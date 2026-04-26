Add-Type -AssemblyName System.Drawing

$srcPath  = Join-Path $PSScriptRoot "assets\logo.jpg"
$destPath = Join-Path $PSScriptRoot "assets\logo-round.png"
$size     = 256

$src = New-Object System.Drawing.Bitmap($srcPath)
$bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode    = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.Clear([System.Drawing.Color]::Transparent)

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$g.SetClip($path)
$g.DrawImage($src, 0, 0, $size, $size)
$g.Dispose()
$src.Dispose()

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Done: logo-round.png saved to assets folder"
