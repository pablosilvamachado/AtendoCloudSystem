﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;

namespace AtendoCloudSystem.Tables.Dto
{
    [AutoMapFrom(typeof(Table))]
    public class TableListDto : FullAuditedEntityDto<int>
    {
        public string Numero { get; set; }

        public string Description { get; set; }

        public string Status { get; set; }

        public bool IsCancelled { get; set; }

    }
}


