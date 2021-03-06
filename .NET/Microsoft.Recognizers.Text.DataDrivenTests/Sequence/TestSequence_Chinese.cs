﻿using Microsoft.Recognizers.Text.DataDrivenTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Microsoft.Recognizers.Text.Sequence.Tests
{
    [TestClass]
    public class TestSequence_Chinese : TestBase
    {

        [NetCoreTestDataSource]
        [TestMethod]
        public void URLModel(TestModel testSpec)
        {
            TestURL(testSpec);
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void PhoneNumberModel(TestModel testSpec)
        {
            TestPhoneNumber(testSpec);
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void IpAddressModel(TestModel testSpec)
        {
            TestIpAddress(testSpec);
        }
    }
}
