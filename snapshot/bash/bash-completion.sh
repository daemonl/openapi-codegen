# bash_completion.sh completion                               -*- shell-script -*-

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !
# ! Note:
# !
# ! THIS SCRIPT HAS BEEN AUTOMATICALLY GENERATED USING
# ! swagger-codegen (https://github.com/swagger-api/swagger-codegen)
# ! FROM SWAGGER SPECIFICATION IN JSON.
# !
# ! Generated on: Mon Jul 02 2018 20:01:50 GMT+1000 (AEST)
# !
# !
# ! System wide installation:
# !
# ! $ sudo cp bash_completion.sh.bash-completion /etc/bash-completion.d/bash_completion.sh
# !
# !
# ! User home installation (add this line to .bash_profile):
# !
# ! [ -r ~/bash_completion.sh.bash-completion ] && source ~/bash_completion.sh.bash-completion
# !
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

declare -A mime_type_abbreviations
# text/*
mime_type_abbreviations["text"]="text/plain"
mime_type_abbreviations["html"]="text/html"
mime_type_abbreviations["md"]="text/x-markdown"
mime_type_abbreviations["csv"]="text/csv"
mime_type_abbreviations["css"]="text/css"
mime_type_abbreviations["rtf"]="text/rtf"
# application/*
mime_type_abbreviations["json"]="application/json"
mime_type_abbreviations["xml"]="application/xml"
mime_type_abbreviations["yaml"]="application/yaml"
mime_type_abbreviations["js"]="application/javascript"
mime_type_abbreviations["bin"]="application/octet-stream"
mime_type_abbreviations["rdf"]="application/rdf+xml"
# image/*
mime_type_abbreviations["jpg"]="image/jpeg"
mime_type_abbreviations["png"]="image/png"
mime_type_abbreviations["gif"]="image/gif"
mime_type_abbreviations["bmp"]="image/bmp"
mime_type_abbreviations["tiff"]="image/tiff"


#
# Check if this is OSX, if so defined custom init_completion
#
if [[ `uname` =~ "Darwin" ]]; then
    __osx_init_completion()
    {
        COMPREPLY=()
        _get_comp_words_by_ref cur prev words cword
    }
fi

_bash_completion.sh()
{
    local cur
    local prev
    local words
    local cword

    # The reference of currently selected REST operation
    local operation=""

    # The list of available operation in the REST service
    # It's modelled as an associative array for efficient key lookup
    declare -A operations
    operations["addPet"]=1
    operations["updatePet"]=1
    operations["findPetsByStatus"]=1
    operations["findPetsByTags"]=1
    operations["getPetById"]=1
    operations["updatePetWithForm"]=1
    operations["deletePet"]=1
    operations["uploadFile"]=1
    operations["getInventory"]=1
    operations["placeOrder"]=1
    operations["getOrderById"]=1
    operations["deleteOrder"]=1
    operations["createUser"]=1
    operations["createUsersWithArrayInput"]=1
    operations["createUsersWithListInput"]=1
    operations["loginUser"]=1
    operations["logoutUser"]=1
    operations["getUserByName"]=1
    operations["updateUser"]=1
    operations["deleteUser"]=1

    # An associative array of operations to their parameters
    # Only include path, query and header parameters
    declare -A operation_parameters
    operation_parameters["addPet"]=""
    operation_parameters["updatePet"]=""
    operation_parameters["findPetsByStatus"]="status= "
    operation_parameters["findPetsByTags"]="tags= "
    operation_parameters["getPetById"]="petId= "
    operation_parameters["updatePetWithForm"]="petId= "
    operation_parameters["deletePet"]="petId= api_key: "
    operation_parameters["uploadFile"]="petId= "
    operation_parameters["getInventory"]=""
    operation_parameters["placeOrder"]=""
    operation_parameters["getOrderById"]="orderId= "
    operation_parameters["deleteOrder"]="orderId= "
    operation_parameters["createUser"]=""
    operation_parameters["createUsersWithArrayInput"]=""
    operation_parameters["createUsersWithListInput"]=""
    operation_parameters["loginUser"]="username= password= "
    operation_parameters["logoutUser"]=""
    operation_parameters["getUserByName"]="username= "
    operation_parameters["updateUser"]="username= "
    operation_parameters["deleteUser"]="username= "

    # An associative array of possible values for enum parameters
    declare -A operation_parameters_enum_values

    #
    # Check if this is OSX and use special __osx_init_completion function
    #
    if [[ `uname` =~ "Darwin" ]]; then
        __osx_init_completion || return
    else
        _init_completion -s || return
    fi


    # Check if operation is already in the command line provided
    for word in "${words[@]}"; do
        if [[ -n $word && ${operations[$word]} ]]; then
            operation="${word}"
        fi
    done

    if [[ -z $operation ]]; then
        case $prev in
            --ciphers|--connect-timeout|-C|--continue-at|-F|--form|--form-string|\
            --ftp-account|--ftp-alternative-to-user|-P|--ftp-port|-H|--header|-h|\
            --help|--hostpubmd5|--keepalive-time|--krb|--limit-rate|--local-port|\
            --mail-from|--mail-rcpt|--max-filesize|--max-redirs|-m|--max-time|\
            --pass|--proto|--proto-redir|--proxy-user|--proxy1.0|-Q|--quote|-r|\
            --range|-X|--request|--retry|--retry-delay|--retry-max-time|\
            --socks5-gssapi-service|-t|--telnet-option|--tftp-blksize|-z|\
            --time-cond|--url|-u|--user|-A|--user-agent|-V|--version|-w|\
            --write-out|--resolve|--tlsuser|--tlspassword|--about)
                return
                ;;
            -K|--config|-b|--cookie|-c|--cookie-jar|-D|--dump-header|--egd-file|\
            --key|--libcurl|-o|--output|--random-file|-T|--upload-file|--trace|\
            --trace-ascii|--netrc-file)
                _filedir
                return
                ;;
            --cacert|-E|--cert)
                _filedir '@(c?(e)rt|cer|pem|der)'
                return
                ;;
            --capath)
                _filedir -d
                return
                ;;
            --cert-type|--key-type)
                COMPREPLY=( $( compgen -W 'DER PEM ENG' -- "$cur" ) )
                return
                ;;
            --crlfile)
                _filedir crl
                return
                ;;
            -d|--data|--data-ascii|--data-binary|--data-urlencode)
                if [[ $cur == \@* ]]; then
                    cur=${cur:1}
                    _filedir
                    COMPREPLY=( "${COMPREPLY[@]/#/@}" )
                fi
                return
                ;;
            --delegation)
                COMPREPLY=( $( compgen -W 'none policy always' -- "$cur" ) )
                return
                ;;
            --engine)
                COMPREPLY=( $( compgen -W 'list' -- "$cur" ) )
                return
                ;;
            --ftp-method)
                COMPREPLY=( $( compgen -W 'multicwd nocwd singlecwd' -- "$cur" ) )
                return
                ;;
            --ftp-ssl-ccc-mode)
                COMPREPLY=( $( compgen -W 'active passive' -- "$cur" ) )
                return
                ;;
            --interface)
                _available_interfaces -a
                return
                ;;
            -x|--proxy|--socks4|--socks4a|--socks5|--socks5-hostname)
                _known_hosts_real
                return
                ;;
            --pubkey)
                _filedir pub
                return
                ;;
            --stderr)
                COMPREPLY=( $( compgen -W '-' -- "$cur" ) )
                _filedir
                return
                ;;
            --tlsauthtype)
                COMPREPLY=( $( compgen -W 'SRP' -- "$cur" ) )
                return
                ;;
            --host)
                COMPREPLY=( $( compgen -W 'http:// https://' -- "$cur" ) )
                return
                ;;
            -ct|--content-type|-ac|--accept)
                COMPREPLY=( $( compgen -W '${!mime_type_abbreviations[*]}' -- "$cur" ) )
                return
                ;;
        esac
    fi

    #
    # Complete the server address based on ~/.ssh/known_hosts
    # and ~/.ssh/config
    #
    local prefix=${COMP_WORDS[COMP_CWORD-2]}
    local colon=${COMP_WORDS[COMP_CWORD-1]}
    if [[ "$colon" == ":" && ( $prefix == "https" || $prefix == "http" ) ]]; then
        COMPREPLY=()
        local comp_ssh_hosts=`[[ -f ~/.ssh/known_hosts ]] && \
                              ( cat ~/.ssh/known_hosts | \
                              grep '^[a-zA-Z0-9]' | \
                              cut -f 1 -d ' ' | \
                              sed -e s/,.*//g | \
                              grep -v ^# | \
                              uniq | \
                              grep -v "\[" ) ;
                              [[ -f ~/.ssh/config ]] && \
                              ( cat ~/.ssh/config | \
                              grep "^Host " | \
                              awk '{print $2}' )`
        COMPREPLY=( $( compgen -P '//' -W '${comp_ssh_hosts}' -- "${cur:2}") )
        return
    fi

    #
    # Complete the bash_completion.sh and cURL's arguments
    #
    if [[ $cur == -* ]]; then
        COMPREPLY=( $( compgen -W '$(_parse_help curl) $(_parse_help $1)' -- "$cur" ) )
        return
    fi

    #
    # If the argument starts with a letter this could be either an operation
    # or an operation parameter
    # When $cur is empty, suggest the list of operations by default
    #
    if [[ $cur =~ ^[A-Za-z_0-9]* ]]; then
        # If operation has not been yet selected, suggest the list of operations
        # otherwise suggest arguments of this operation as declared in the
        # Swagger specification
        if [[ -z $operation ]]; then
            COMPREPLY=( $(compgen -W '${!operations[*]}' -- ${cur}) )
        else
            COMPREPLY=( $(compgen -W '${operation_parameters[$operation]}' -- ${cur}) )
            compopt -o nospace
        fi
        return
    fi

} &&
complete -F _bash_completion.sh bash_completion.sh

# ex: ts=4 sw=4 et filetype=sh
