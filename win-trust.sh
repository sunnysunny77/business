#!/bin/bash

powershell Import-Certificate -FilePath certs\\ca.crt -CertStoreLocation cert:\\CurrentUser\\Root

echo node --env-file=$(pwd -W)/.env $(pwd -W)/edit-hosts.cjs > win32.ps1