﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Saipos_ToDo.Crosscutting.Settings {
    
    
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Editors.SettingsDesigner.SettingsSingleFileGenerator", "16.7.0.0")]
    public sealed partial class GlobalOptions : global::System.Configuration.ApplicationSettingsBase {
        
        private static GlobalOptions defaultInstance = ((GlobalOptions)(global::System.Configuration.ApplicationSettingsBase.Synchronized(new GlobalOptions())));
        
        public static GlobalOptions Default {
            get {
                return defaultInstance;
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("Undo limit has been reached!")]
        public string Error_Task_Undo_Limit {
            get {
                return ((string)(this["Error_Task_Undo_Limit"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("2")]
        public int Value_Task_Undo_Limit {
            get {
                return ((int)(this["Value_Task_Undo_Limit"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("8aaa83857f1d19b2143b7a159dad904d")]
        public string Mailbox_Key {
            get {
                return ((string)(this["Mailbox_Key"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("http://apilayer.net/api/check")]
        public string Mailbox_Url {
            get {
                return ((string)(this["Mailbox_Url"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("https://cat-fact.herokuapp.com/facts")]
        public string CatFact_Url {
            get {
                return ((string)(this["CatFact_Url"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("Eu")]
        public string Idle_Task_User {
            get {
                return ((string)(this["Idle_Task_User"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("eu@me.com")]
        public string Idle_Task_Email {
            get {
                return ((string)(this["Idle_Task_Email"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("Idle Task")]
        public string Idle_Task_Title {
            get {
                return ((string)(this["Idle_Task_Title"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("Data Source=database.sqlite")]
        public string Connection_String {
            get {
                return ((string)(this["Connection_String"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("TeSt!")]
        public string Auth_Hash {
            get {
                return ((string)(this["Auth_Hash"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("q78y1]ZHnR59{nB77q0h661PM67L&366V1871@d]6D$)T6AdEB53KJc66kvQ58r4H66JfJ6Eis975Tki7" +
            "4IZ")]
        public string Auth_Key {
            get {
                return ((string)(this["Auth_Key"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("Invalid Password")]
        public string Auth_Error_Message {
            get {
                return ((string)(this["Auth_Error_Message"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("3")]
        public int Value_Random_Tasks {
            get {
                return ((int)(this["Value_Random_Tasks"]));
            }
        }
        
        [global::System.Configuration.UserScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.DefaultSettingValueAttribute("Invalid email format, did you mean {0}?")]
        public string Error_Format_Email {
            get {
                return ((string)(this["Error_Format_Email"]));
            }
            set {
                this["Error_Format_Email"] = value;
            }
        }
    }
}